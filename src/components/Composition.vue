<template>
  <p>{{ count }}</p>
  <button @click="increment">Increase</button>
</template>
<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);
const increment = () => {
  count.value++;
};
onMounted(() => {
  console.log("Composition Mounted!");
});
</script>
<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script> -->