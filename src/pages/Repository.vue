<template>
  <p>Hello World</p>
</template>
<script>
import useRepositoryStore from "@/store/repository.js";
import { mapActions, mapState } from "pinia";
export default {
  created() {
    this.getAllRepositories();
    console.log(this.repositories);
  },
  //
  computed: {
    ...mapState(useRepositoryStore, "repositories"),
  },
  methods: {
    ...mapActions(useRepositoryStore, ["getAllRepositories"]),
  },
};
</script>