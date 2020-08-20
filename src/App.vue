<template>
  <div id="app">
    <ion-app>
    <h4 class="not-mobile">
      Template is built for mobile, for best experience please use a mobile device or use the browser in mobile mode.
    </h4>
      <ion-vue-router />
      <Footer :data="footer" :loggedIn="loggedIn" @goto="goto" />
    </ion-app>
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  components: {
    Footer
  },
  data() {
    return {
      loggedIn: true,
      footer: [
        {
          label: "Profile",
          route: "profile",
          icon: "person"
        },
        {
          label: "Home",
          route: "home",
          icon: "add"
        },
        {
          label: "Notifications",
          route: "notifications",
          icon: "notifications"
        }
      ]
    }
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss">
@import "./media-queries.scss";

// *** GLOBAL *** // 
h1 , h2 , h3 , h4 , p , a , ul li , strong , label {
  color: #777777;
}

:root {
  --ion-color-primary: #355724;
  --ion-color-primary-tint: #19ce4f;
  --ion-color-primary-shade: #19ce4f;

  --ion-color-light: #ffffff;
  --ion-color-medium: #e6e5e5;
  --ion-color-medium-tint: #777777;
  --ion-color-medium-shade: #777777;
  --ion-color-medium-contrast:#777777;
  --ion-background-color: #BDC3CE;

  ion-content{
    --padding-bottom: 80px !important;
  // --ion-background: #e1e9ea !important;
  // --background: #e1e9ea !important;
  }

}
</style>
