<template>
  <ion-page>
<ion-header>
	<ion-toolbar>
        <ion-title>Welcome to IvyFinder</ion-title>    
		</ion-toolbar>
	</ion-header>
      <ion-segment @ionChange="segmentChanged($event)">
        <ion-segment-button>
          <ion-icon :icon="leafOutline"></ion-icon><ion-label>Basics</ion-label></ion-segment-button>
        <ion-segment-button><ion-label>Faq</ion-label></ion-segment-button>
      </ion-segment>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="bar"> 
        <ion-tab-button class="tabtest" tab="tab1" href="/tabs/tab2/Info">
          <ion-icon :icon="homeFilled" />
          <ion-label>Info</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" class="tabtest" href="/tabs/tab2/FAQ">
          <ion-icon :icon="leafSharp" />
          <ion-label>Miscellaneous</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonFabButton, IonFab} from '@ionic/vue';
import { cameraFilled, medkitFilled, eyeOutline, navigateSharp, homeFilled, bookFilled, shieldHalfOutline, leafSharp} from 'ionicons/icons';


export default {
  name: 'InfoTabs',
  components: { IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton,  IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet},
  setup(){
    return {
      cameraFilled, 
      medkitFilled,
      navigateSharp,
      homeFilled,
      bookFilled,
      eyeOutline,
      shieldHalfOutline,
      leafSharp
      };
  }
}
</script>

<style scoped>
ion-tool-bar{
    
}
:root {
  background: rgb(230,235,230);
}
.bar{

  
  border-radius: 0px 0px 0px 0px ;
position: relative;
transform: translateY(30px);
  display:hidden
  
  
}
.tabtest{
  position: relative;
  --padding-top: 4px;
  --padding-bottom: 4px;
}
.fab{
  --ion-color-primary: linear-gradient(135deg, #387442, #3d7045, rgb(123, 172, 123));
}


</style>
