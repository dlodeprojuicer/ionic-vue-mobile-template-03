<template>
  <ion-content class="ion-padding">
    <ion-grid class="header-wrapper">
      <ion-row>
        <ion-col class="header">Leasing Match</ion-col>
        <ion-col>
          <ion-icon name="grid" class="header-icons"></ion-icon>
          <ion-icon name="menu" class="header-icons"></ion-icon>
        </ion-col>
      </ion-row>
    </ion-grid>

    <CardWallet :data="cards" />
  </ion-content>
</template>

<script>
import CardWallet from "../components/CardWallet";

export default {
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    CardWallet
  },
  data() {
    return {
      cards: [
        {
          new: "59.990",
          rate: "481",
          term: "36",
          company: "Volvo",
          model: "XC 40",
          image: "https://www.dailymaverick.co.za/wp-content/uploads/19-213087_new_volvo_xc40_exterior-498114-e1527721345669-1600x841.jpg"
        },
        {
          new: "54.980",
          rate: "342",
          term: "36",
          company: "Mercedes",
          model: "C-Class",
          image: "https://cdn.motor1.com/images/mgl/3xR11/s3/2019-mercedes-benz-c-class-sedan.jpg"
        },
        {
          new: "43.986",
          rate: "366",
          term: "36",
          company: "Lexus",
          model: "LS",
          image: "https://images.hgmsites.net/hug/lexus-ls_100751064_h.jpg"
        },
      ],
      subscriptions: [
        {
          name: "Themna Makwa",
          icon: "person",
          cost: "19.30",
          date: "12 Aug 2020, 03:23 am",
        },
        {
          name: "Tami Muthambi",
          icon: "person",
          cost: "6.09",
          date: "10 Aug 2020, 13:40 pm",
        },
        {
          name: "Gary Goat",
          icon: "person",
          cost: "19.30",
          date: "12 Aug 2020, 03:23 am",
        },
        {
          name: "Jackie Chan",
          icon: "person",
          cost: "6.09",
          date: "10 Aug 2020, 13:40 pm",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  margin-bottom: 10px;
}

.header {
  font-size: 17px;
  font-weight: 500;
}

.header-icons {
  padding: 0px;
  float: right;
  font-size: 28px;

  &:last-child {
    margin-right: 10px;
  }
}
</style>
