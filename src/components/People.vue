<template>
  <ion-slides>
    <ion-slide v-for="(item, index) in data" :key="index">
      <ion-card>
        <img :src="item.image" width="100%" />
        <ion-card-header>
          <ion-card-title>{{ item.name }} {{ item.lastname }}</ion-card-title>
        </ion-card-header>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>

<script>
export default {
  name: "people",
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
ion-slide {
  width: 120px !important;
}

ion-card {
  background: #ffffff;
  width: 120px !important;
  border-radius: 20px;
  margin: 5px;
}

img {
  padding: 7px;
  border-radius: 20px;
  height: 90px;
}

ion-card-title {
  font-size: 12px !important;
  text-align: left;
}

ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}

</style>