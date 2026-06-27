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

<script setup lang="ts">
import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import {grid, menu} from "ionicons/icons";
import CardListing from "@/components/CardListing.vue"

interface LeasingCard {
  new: string
  rate: string
  term: string
  company: string
  model: string
  image: string
}

const cards: LeasingCard[] = [
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
]
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-header {
  padding: 7px 0;
  margin-bottom: 10px;
  border-bottom: none;
}
</style>
