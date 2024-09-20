<template>
  <p>Hello World</p>
  <button @click="getAllRepositories">Get repo</button>
</template>
<script>
import useRepositoryStore from "@/store/repository.js";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(useRepositoryStore, ["getAllRepositories"]),
  },
};
</script>