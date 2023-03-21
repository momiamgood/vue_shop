<template>
  <div v-for="error in errorM" :key="error">
      <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "AppValErrors",
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorM() {
      return Object.keys(this.validationErrors).map((key) => {
        const mass = this.validationErrors[key].join(',');
        return `${key}` `${mass}`;
      })
    }
  },
  mounted(){
    console.log(Object.keys(this.validationErrors))
  }
}

</script>

<style scoped>

</style>