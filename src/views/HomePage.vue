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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import {grid, menu} from "ionicons/icons";
import CardListing from "@/components/CardListing.vue"
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
