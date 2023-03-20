<template>
  <nav>
    <router-link :to="{name:'home'}" class="logo">Просто купить</router-link>
    <div>
      <router-link :to="{name : 'app-register'}">Регистрация</router-link>
      <router-link :to="{name : 'app-login'}">Вход</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  props: {

  }
}
</script>

<style scoped>
  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  nav > div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  nav > div > a {
    color: black;
    text-decoration: none;
  }

  nav > div > a:hover {
    color: darkblue;
  }
  .logo {
    text-decoration: none;
    color: black;
  }
</style>