<template>
  <div class="col-lg-3 col-sm-6">
    <div class="box">
      <div class="img-box">
        <img src="https://picsum.photos/800" class="img1" alt="" />
      </div>
      <div class="detail-box">
        <router-link :to="`/team/${url}`">{{ username }}</router-link>
        <p>{{ email }}</p>
      </div>
      <div class="social_box">
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </div>
      <button @click="emitEvent">Cick Me</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["username", "firstname", "lastname", "email"],
  methods: {
    emitEvent() {
      this.$emit("custom-event", {
        username: this.username,
        email: this.email,
      });
    },
  },
};
</script>