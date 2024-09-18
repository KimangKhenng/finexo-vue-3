<template>
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <router-view></router-view>
  </div>
  <Footer />
</template>
,<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>