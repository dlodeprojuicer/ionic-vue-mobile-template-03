<template>
  <fragment>
    <PayCardOverview />
    <People :data="people" />
    <ion-content class="ion-padding">
      <Form />
            <h1 class="test">
        test
      </h1>
      <ion-button color="dark">
        Send
      </ion-button>
    </ion-content>
  </fragment>
</template>

<script>
// import SectionDivider from "../components/SectionDivider";
import Form from "../components/Form";
import People from "../components/People";
import PayCardOverview from "../components/PayCardOverview";

export default {
  name: "pay",
  title: "Pay",
  requiresAuth: false,
  components: {
    // SectionDivider,
    Form,
    People,
    PayCardOverview,
  },
  data() {
    return {
      cards: [
        {
          cardNumber: "4524 3428 898 239",
          balance: "12 354.05",
          accountName: "Savings",
          expDate: "02/2020",
        },
        {
          cardNumber: "9483 2394 8987 8391",
          balance: "1435.20",
          accountName: "Savings",
          expDate: "06/2024",
        },
        {
          cardNumber: "3079 485 2395 3944",
          balance: "8 200",
          accountName: "Savings",
          expDate: "08/2022",
        },
      ],
      people: [
        {
          name: "Person Name",
          image: "./images/makazoli.png"
        },
        {
          name: "Jackson Bole",
          image: "./images/max.png"
        },
        {
          name: "Gary Goat",
          image: "./images/lewis.png"
        },
        {
          name: "Jackie Chan",
          image: "./images/snoop.png"
        }
      ]
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .test{
    display: none;
  }
}

ion-button {
  width: 100%;
  --border-radius: 20px;
  height: 46px;
  text-transform: none;
}
</style>
