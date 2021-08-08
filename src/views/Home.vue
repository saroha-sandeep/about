<template>
  <div class="home">
    <About msg="Sandeep"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from '@/components/about.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    About,
  },
});
</script>
