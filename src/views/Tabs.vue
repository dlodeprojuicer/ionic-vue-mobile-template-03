<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button>
            <ion-icon :icon="person" />
          </ion-tab-button>
            
          <ion-tab-button href="/tabs/tab3">
            <ion-icon :icon="add" />
          </ion-tab-button>
          
          <ion-tab-button>
            <ion-icon :icon="notifications" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonIcon, IonPage } from '@ionic/vue';
import { person, add, notifications } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      person, 
      add, 
      notifications,
    }
  }
}
</script>

<style lang="scss" scoped>
ion-tab-bar {
	border-radius: 10px 10px 0 0;
	--background: #ffffff;

	ion-tab-button {
		&:nth-child(2) {
			// margin-top: -51px;
			// background: #ffff;
			ion-icon {
				border: 1px #232323 solid;
				border-radius: 50px;
				padding: 13px;
			}
		}
	}
}
</style>
