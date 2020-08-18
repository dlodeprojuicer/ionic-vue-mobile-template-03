<template>
  <ion-content class="ion-padding">
    <br />
    <h1>404 Page Not Found</h1>
    <br />

    <ion-button
      type="submit"
      @click="goHome()"
    >HOME</ion-button>
  </ion-content>
</template>

<script>
export default {
  name: "page-not-found",
  components: {
  },
  methods: {
    goHome() {
      this.$router.push("home");
    }
  }
};
</script>
