<template>
  <div>
    <app-nav></app-nav>
    <h1>Регистрация</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Почта</label>
      <input type="email" id="email" v-model="email">

      <label for="username">Имя пользователя</label>
      <input type="text" id="username" v-model="fio">

      <label for="password">Пароль</label>
      <input type="password" v-model="password" >

      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";


export default {
  name: "AppRegister",
  components: {AppNav},
  data() {
    return {
        fio: '',
        email: '',
        password: ''
    }
  },
  computed: {

  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        fio: this.fio,
        email: this.email,
        password: this.password
      })
    }
  }
}

</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 30px;
  }

  form {
    width: 325px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 20px;
    padding: 20px;

  }

  input {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    height: 20px;
  }
  button {
    font-size: 15px;
    background-color: #0f0f8d;
    padding: 15px;
    color: white;
    border: none;
    border-radius: 10px;
    width: 200px;
  }
</style>