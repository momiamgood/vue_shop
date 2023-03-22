<template>
  <div>
    <app-nav></app-nav>
    <h1>Вход</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Почта</label>
      <input type="email" id="email" v-model="email">

      <label for="password">Пароль</label>
      <input type="password" v-model="password">

      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";

export default {

  name: "AppLogin",
  components: {AppNav},
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isSubmitting(){
      return this.$store.state.auth.isSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
          .then(() => {
            this.$router.push({ name: "home" });
          });
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