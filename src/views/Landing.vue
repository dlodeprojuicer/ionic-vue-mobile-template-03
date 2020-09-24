<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Leasing Match</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="menu"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="grid"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <CardListing :data="cards" />

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton } from '@ionic/vue';
import CardListing from "../components/CardListing";
import { grid, menu } from 'ionicons/icons';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonButtons, IonButton, CardListing },
  setup() {
    return {
      grid,
      menu
    }
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
  }
}
</script>

<style lang="scss" scoped>
ion-header {
  padding: 7px 0;
  margin-bottom: 10px;
  border-bottom: none;
}
</style>
