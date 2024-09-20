<template>
  <CourseCardVue
    v-for="(course, index) in courses"
    :key="index"
    :title="course.title"
    :short-description="course.shortDescription"
    :price="course.price"
  />
</template>
<script>
import useRepositoryStore from "@/store/repository.js";
import { mapActions, mapState } from "pinia";
import CourseCardVue from "@/components/cards/CourseCard.vue";
export default {
  components: {
    CourseCardVue,
  },
  async created() {
    await this.getAllRepositories();
    console.log("Get courses");
    console.log(this.courses);
  },
  //
  computed: {
    ...mapState(useRepositoryStore, ["courses"]),
  },
  methods: {
    ...mapActions(useRepositoryStore, ["getAllRepositories"]),
  },
};
</script>