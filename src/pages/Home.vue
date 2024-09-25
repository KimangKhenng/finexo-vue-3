<template>
  <Hero></Hero>
  <Composition />
  <Services></Services>
  <About></About>
  <Why></Why>
  <Team></Team>
  <Client></Client>
</template>
  
  <script>
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Why from "@/components/Why.vue";
import Team from "@/components/Team.vue";
import Client from "@/components/Client.vue";
import Composition from "@/components/Composition.vue";

export default {
  components: {
    Hero,
    Services,
    About,
    Why,
    Team,
    Client,
    Composition,
  },
};
</script>
  
  