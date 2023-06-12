<template>
  <main class="main">
    <div class="create-form">
      <div class="container create-form__container">
        <div class="create-form__row py-3">

          <div class="create-form-field-title create-form-field card border border-success rounded-1 border-3">
            <div class="create-form-field__header card-header p-3 mb-2">
              <h3 class="create-form-field__title card-title">Выберите название создаваемой формы:</h3>
              <p class="create-form-field__text card-text">Это название будет видно остальным пользователям, которые будут проходить ваш составленный опрос</p>
            </div>

            <div class="create-form-field__body card-body">
              <div class="row">
                <div class="col">
                  <FieldInput 
                    :autofocus="!$store.state.showPopup"
                    v-model="activeInput.value"
                    ref="titleInput"
                    @keyup.ctrl="clearActiveInput"
                    @focus="onActiveInputFocus"
                    @blur="onActiveInputBlur" 
                  />
                </div>

                <div class="col-1 d-flex justify-content-center align-items-center">
                  <ButtonClear
                    @click="clearActiveInput"
                    :disabled="disabledClearButton" />
                </div>
              </div>
            </div>
          </div>

          <ButtonMore
            :disabled="disabledMoreButton"
            :showTooltip="showTooltip"
            @click="goToCreateField"
            />
        </div>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import ButtonMore from '@/components/UI/ButtonMore.vue';
import ButtonClear from '@/components/UI/ButtonClear.vue';
import FieldInput from '@/components/FieldInput.vue';


export default {
  name: 'CreateForm',

  components: {
    ButtonMore, ButtonClear, FieldInput,
  },

  data() {
    return {
      title: '',
      activeInput: {
        target: null,
        value: '',
      },
      disabledClearButton: true,
      disabledMoreButton: true,
      showTooltip: false,
    }
  },

  methods: {
    // Показываем тултип только при блюре инпута
    onActiveInputBlur() {
      this.showTooltip = !this.disabledMoreButton;
    },

    onActiveInputFocus(event) {
      this.activeInput.target = event.target; // FIX ME; Значение должно приходить из цикла в <template>
      this.activeInput.value = event.target.value;
    },

    clearActiveInput(event) {
      const delBtnKeyCode = 46;
      if ([delBtnKeyCode, undefined].includes(event.keyCode)) {
        this.activeInput.value = '';
      }
    },

    goToCreateField() {
      this.$router.push({ name: 'create-new-field' });
    }
  },

  watch: {
    activeInput: {
      handler() {
        this.disabledClearButton = this.activeInput.value.length === 0;

        this.disabledMoreButton = this.activeInput.value.length < 5 || this.$store.state.showPopup;
        this.showTooltip = !this.disabledMoreButton;        
      },
      deep: true,
    }
  }
}
</script>

<style scoped>


</style>