<template>
  <div>
    <h1>Регистрация</h1>
    <form>
      <label for="email">Почта</label>
      <input type="email" id="email">

      <label for="username">Имя пользователя</label>
      <input type="text" id="username">

      <label for="password">Пароль</label>
      <input type="password">

      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppRegister"
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input {
  width: 300px;
  height: 40px;
}
label {
  margin-bottom: 10px;
}

</style>