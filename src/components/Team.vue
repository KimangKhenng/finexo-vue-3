<template>
  <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">Our <span> Team</span></h2>
      </div>

      <div class="team_container">
        <div class="row">
          <TeamCard
            @custom-event="handleCustomEvent"
            v-for="(item, index) in members"
            :key="index"
            :username="item.username"
            :email="item.email"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
</template>
<script>
import TeamCard from "@/components/cards/TeamCard.vue";
import axios from "axios";
export default {
  components: { TeamCard },
  data() {
    return {
      members: [],
    };
  },
  // async created() {
  //   const token = localStorage.getItem("accessToken");
  //   const response = await axios.get("/v1/users", {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  //   this.members = response.data;
  // },
  methods: {
    handleCustomEvent(data) {
      console.log(data);
    },
  },
};
</script>