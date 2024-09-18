<template>
  <!-- Your own design -->
  <h1>{{ course.title }}</h1>
  <p>{{ course.shortDescription }}</p>
  <p>{{ course.price }}</p>
  <button @click="goHome">Back Home</button>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      course: "",
    };
  },
  async created() {
    const url = "/v1/courses/" + this.$route.params.id;
    const response = await axios.get(url);
    this.course = response.data;
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>