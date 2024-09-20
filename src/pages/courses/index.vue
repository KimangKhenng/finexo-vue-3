<template>
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">Our <span> Courses</span></h2>
      </div>

      <div class="team_container">
        <div class="row">
          <CourseCard
            v-for="(course, index) in courses"
            :key="index"
            :title="course.title"
            :price="course.price"
            :short-description="course.shortDescription"
            :url="course.titleURL"
          >
            <template v-slot:social>
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
            </template>
          </CourseCard>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CourseCard from "@/components/cards/CourseCard.vue";
import axios from "axios";
export default {
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [],
    };
  },
  async created() {
    const response = await axios.get("/v1/courses");
    const courses = response.data;
    this.courses = courses;
  },
};
</script>