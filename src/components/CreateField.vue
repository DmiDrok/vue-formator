<template>
  <div @click="closePopup" :class="{ show: $store.state.showPopup }" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div @click.stop class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Создание нового поля формы</h1>
          <button @click="closePopup" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="field-title" class="col-form-label">Заголовок поля:</label>
              <input
                v-model="field.title"
                type="text" class="form-control"
                id="field-title"
              >
            </div>
            <div class="mb-3">
              <label for="field-text" class="col-form-label">Текст под полем (необязательно):</label>
              <textarea 
                v-model="field.text"
                class="form-control"
                id="field-text"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="field-type" class="col-form-label">Тип поляяя:</label>
              <div class="dropdown">
                <select v-model="field.type" id="field-type" class="btn btn-outline-success dropdown-toggle">
                  <option value="text">Текстовое</option>
                  <option value="group">Группа</option>
                  <option value="dropdown">Выпадающее</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click="closePopup" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button
            :disabled="createBtnDisabled"
            @click="makeField"
            type="button"
            class="btn btn-success"
          >Создать поле</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      field: {
        name: 'title',
        title: '',
        text: '',
        placeholder: '',
        type: 'text',
        target: null,
        value: '',
      },
      createBtnDisabled: true,
    }
  },

  methods: {
    closePopup() {
      this.$router.push({ name: 'creation' });
    },

    makeField() {
      this.$emit('makeField', this.field);
      this.closePopup();
    }
  },

  mounted() {
    this.$store.commit('setPopupActive');
  },

  beforeUnmount() {
    this.$store.commit('setPopupHide');
  },

  watch: {
    field: {
      handler() {
        if (this.field.title.length >= 5) {
          this.createBtnDisabled = false;
        }
      },

      deep: true,
    }
  }
}
</script>

<style scoped>

</style>