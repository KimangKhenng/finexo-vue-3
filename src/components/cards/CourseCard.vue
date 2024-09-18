<template>
  <div class="col-lg-4 col-sm-6">
    <div class="box">
      <slot name="upper"></slot>
      <div class="img-box">
        <img src="https://picsum.photos/800" class="img1" alt="" />
      </div>
      <div class="detail-box">
        <router-link :to="`/courses/${url}`">{{ title }}</router-link>
        <p>{{ price }}</p>
        <p>{{ shortDescription }}</p>
      </div>
      <slot name="social"></slot>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["title", "price", "shortDescription", "url"],
};
</script>