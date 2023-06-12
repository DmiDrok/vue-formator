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
              <label for="recipient-name" class="col-form-label">Заголовок поля:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Текст под полем (необязательно):</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label class="col-form-label">Тип поля:</label>
              <div class="dropdown">
                <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Выберите тип поля:
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Текстовое</a></li>
                  <li><a class="dropdown-item" href="#">Группа</a></li>
                  <li><a class="dropdown-item" href="#">Выпадающее</a></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click="closePopup" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-success">Создать поле</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  methods: {
    closePopup() {
      this.$router.push({ name: 'creation' });
    }
  },

  mounted() {
    this.$store.commit('setPopupActive');
  },

  beforeUnmount() {
    this.$store.commit('setPopupHide');
  },
}
</script>

<style scoped>

</style>