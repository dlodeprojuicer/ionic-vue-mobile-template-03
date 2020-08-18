<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button color="dark" @click="pay">
          <ion-icon name="apps" class="btn-icon"></ion-icon>Pay
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button color="dark">
          <ion-icon name="swap" class="btn-icon"></ion-icon>Transfer
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
	name: "quick-actions",
	methods: {
		pay() {
			this.$router.push("pay");
		}
	}
};
</script>

<style lang="scss" scoped>
ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}

.btn-icon {
  margin: -3px 5px;
}
</style>