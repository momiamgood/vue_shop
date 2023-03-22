<template>
  <div>
    <app-nav></app-nav>
    <h1>Регистрация</h1>
    <form @submit.prevent="onSubmit">

      <div v-for="error in emailErrors" v-bind:key="error">
        <p>{{ error }}</p>
      </div>
      <label for="email">Почта</label>
      <input type="email" id="email" v-model="email">

      <div v-for="error in fioErrors" v-bind:key="error">
        <p>{{ error }}</p>
      </div>
      <label for="username">Имя пользователя</label>
      <input type="text" id="username" v-model="fio">

      <div v-for="error in passwordErrors" v-bind:key="error">
        <p>{{ error }}</p>
      </div>
      <label for="password">Пароль</label>
      <input type="password" v-model="password">

      <button type="submit" :disabled="isSubmitting">Зарегистрироваться</button>
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
      password: '',
      emailErrors: null,
      fioErrors: null,
      passwordErrors: null,
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
    fioErr(){
      return this.$store.state.auth.fioErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        fio: this.fio,
        email: this.email,
        password: this.password
      })
          .then(() => {
            this.$router.push({name: "home"});
          }, () => {
            this.fioErrors = this.$store.state.fioErrors;
            this.emailErrors = this.$store.state.emailErrors;
            this.passwordErrors = this.$store.state.passwordErrors;
          })


    }
  },

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

label {
  font-weight: 500;
}

input {
  border: 2px solid #0f0f8d;
  border-radius: 50px;
  padding: 15px;
  width: 300px;
  height: 15px;
  background: none;
}

input:active {
  border: 3px solid #0f0f8d;
}

input:focus {
  border: 3px solid #0f0f8d;
}

button {
  font-size: 15px;
  background-color: #0f0f8d;
  padding: 15px;
  color: white;
  border: none;
  border-radius: 50px;
  width: 250px;
}
</style>