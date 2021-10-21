<template >
  <ion-page>
  <ion-header>  
      <ion-toolbar class="toolbar" color="dark">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
     
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-title class="title">More about Poison Sumac</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    <ion-content class="ion-content">
          <img src="../views/sumac-not-public.jpg" style="aspect-ratio: 3/2"  />

          <header class= "header2 ion-padding">
            <h3><b>Poison Sumac</b></h3>
          </header>

          <ion-card class="blue">
          
            <ion-card-header>
            <ion-card-title style="color: white">Description</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Poison Sumac is... (To be completed)
            </ion-card-content>

          </ion-card>


    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonHeader, IonButtons, IonBackButton} from '@ionic/vue';
export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonHeader, IonButtons, IonBackButton},
}
</script>

<style scoped>
.ion-content {
   --ion-background-color: linear-gradient(135deg, rgb(144, 255, 144), rgb(220, 247, 222));
}
.hea
  {
  position: static;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ion-card{
  color: black;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  min-height: 30vh;
}

</style>
