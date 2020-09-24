<template>
  <ion-app>
    <h4 class="not-mobile">
      Template is built for mobile, for best experience please use a mobile device or use the browser in mobile mode.
    </h4>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>