<template >
  <ion-page>
  <ion-header>
      <ion-toolbar class="toolbar" >
        <ion-title class="title">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header>
    <ion-content class="pagexs mom">
          <header class= "header2 ion-padding">
            <h3><b>More Information</b></h3>  
          </header>
          <ion-icon class="test" size="large" :icon="leafOutline" />
          <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urishol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Lrem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolor, explicabo qui quidem quia quam cum dolore atque. 
              Laboriosam impedit vel, porro perspiciatis, laudantium earum ipsam!
            </ion-card-content>
            <waves></waves>
          </ion-card>

          <ion-card class="red">
            <img src="./poison-ivy-test2.jpg" style="aspect-ratio: 3/2"  />
            <ion-card-header>
              <ion-card-title style="color: white">Poison Ivy</ion-card-title>
            </ion-card-header>  
            <waves></waves>
          </ion-card>


          <ion-card class="pink">
            <img src="./poison-oak-test.jpg" style="aspect-ratio: 3/2"  />
            <ion-card-header>
            <ion-card-title>Poison Oak</ion-card-title>
            </ion-card-header>
            <waves></waves>
          </ion-card>

          <router-link to="/tabs/poison-ivy">
            <ion-card class="sumac-color">
              <img src="./sumac-not-public.jpg" style="aspect-ratio: 3/2"  />
              <ion-card-header>
              <ion-card-title class=title>Poison Sumac</ion-card-title> 
              </ion-card-header>
              <waves></waves>
            </ion-card>  
          </router-link>
 

        
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonHeader, IonIcon} from '@ionic/vue';
import {leafOutline} from 'ionicons/icons';


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonHeader, IonIcon},

  setup() {
    return{
      leafOutline
    };
  }
}
</script>


<style scoped>

.test {
  position: relative;
  translate: translateY(1000%);
}
.headerdisabled2
  {
  position: static;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.mom ion-card{
  color: white;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  min-height: 30vh;
}
.blue{
  background: blue;
}
.red{
  background: red;
}
.pink{
  background: pink;
  }
.sumac-color{
  background: linear-gradient(135deg, orange, rgb(128, 83, 0));
}

.toolbar{
  --ion-background-color: #307442;

    
}
/* ion-title{
  --color: rgb(0, 0, 0)
} doesn't work */ 
.title{
  color: white;
}



</style>
