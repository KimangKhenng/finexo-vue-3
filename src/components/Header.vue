<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link class="navbar-brand" to="/">
          <span> Finexo </span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li
              v-for="(item, index) in navs"
              class="nav-item"
              :key="index"
              :class="{ active: $route.path == item.path }"
            >
              <router-link :to="item.path" class="nav-link"
                >{{ $t(item.name) }}
                <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="fa fa-user" aria-hidden="true"></i> Login</router-link
              >
            </li>
            <li class="nav-item">
              <button @click="changeLanguage">Change Language</button>
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "home",
          path: "/",
        },
        {
          name: "services",
          path: "/service",
        },
        {
          name: "courses",
          path: "/courses",
        },
        {
          name: "team",
          path: "/team",
        },
        {
          name: "register",
          path: "/register",
        },
      ],
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>