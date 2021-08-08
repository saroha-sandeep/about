<template>
  <div class="hello">
    <img src="../assets/sandeep-saroha-192x192.png" alt="Sandeep Saroha" />
    <h1>Hello, I’m Sandeep and that is my son in the background. I’m a Tech Lead for HCL.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
