<template >
  <ion-page>
  <ion-header>  
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
     
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-title>Other Questions</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    <ion-content class="content">
    <img src="./bladdernut.jpg"/>
    <div class="background">
        
    


    <header class= "header2 ion-padding">
            <h3><b>More Information</b></h3>  
         </header>
        <hr>
<section id="sec1">How Urushiol Invades</section>
<section id="sec4">
    <img class="sec4-img" src="./poison-ivy.jpg"/>
    <div class="sec4-div1">If you suspect you come in contact with </div>
</section>
    <hr>
<section id="sec1">How Urushiol Invades</section>
<section id="sec4">
    <img class="sec4-img" src="./poison-ivy.jpg"/>
    <div class="sec4-div1">If you suspect you come in contact with </div>
</section>
    <hr>
<section id="sec1">Is poison ivy rash contagious?</section>
<section id="sec4">
    <img class="sec4-img" src="./poison-ivy.jpg"/>
    <div class="sec4-div1">If you suspect you come in contact with </div>
</section>
    <hr>
<section id="sec1">Are dead poisonous plants safe?</section>
<section id="sec4">
    <img class="sec4-img" src="./poison-ivy.jpg"/>
    <div class="sec4-div1">If you suspect you come in contact with </div>
</section>
          <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urushiol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Lrem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolor, explicabo qui quidem quia quam cum dolore atque. 
              Laboriosam impedit vel, porro perspiciatis, laudantium earum ipsam!
            </ion-card-content>
            <waves></waves>
          </ion-card>
      <div class="footer"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, 
IonContent,
IonCard,
IonCardContent, 
IonCardTitle, 
IonCardHeader,
IonToolbar, 
IonTitle,
IonBackButton,
IonButtons,
IonHeader, 
IonIcon,
IonTabBar, 
IonTabButton } 
from '@ionic/vue';
import {leafOutline} from 'ionicons/icons';
import { onMounted } from 'vue';


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonTitle,
IonBackButton,
IonButtons,
  IonToolbar, IonHeader
  },

  setup() {
    return{
      leafOutline
    };
  }
}
</script>


<style scoped>
*{
  box-sizing: border-box;
}
.background{
    background: linear-gradient(135deg, rgb(255, 255, 255),green);
    position: absolute;
    top: 20vh;
    border-radius: 20px 20px;
    box-shadow: 0px -4px 8px 0 rgba(21, 255, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
.sec{
  background: linear-gradient(45deg,#ccff0050,#09afff50);
}
section{
  
  max-width: 100vw;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "one two three";
  gap: 10px;
  
}
.plant-title{
  grid-area: plant-title;
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 4px;
  background: linear-gradient( rgb(0,0,0,.1), rgb(0,0,0,.3));
  color: black
}
.one{
  grid-area: one;
}
.two{
  grid-area: two;
}
.three{
  grid-area: three;
}

.header-card{
	width: 50vw;
	height: 80%;
	background: transparent;
	margin: 10px 20px 0px;
	
	
}
.front{
	background: linear-gradient(180deg, rgb(89, 148, 89), rgb(123, 172, 123));

	position: relative;
  display: grid;
  grid-template-columns: 35% 60%;
  gap: 10px;
  grid-template-areas:
    "svg-item info"; 
  /* display: flex;
  justify-content: space-around; */
}


.info{
  text-align: center;
  grid-area: info;
  padding: 4px;
  
}
.info1{
  background: yellow;
}
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
.footer{
  margin-bottom: 70px;
}
.content ion-card{
  color: white;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  min-height: 30vh;
}
.blue{
  background: rgb(35, 35, 35);

}
.red{
  background: linear-gradient( rgb(23, 185, 23), rgb(23, 185, 23), rgb(45, 124, 45));
  grid-area: red;
}
.pink{
  background: linear-gradient(135deg, orange, rgb(128, 83, 0));
  grid-area: pink;
  }
.sumac-color{
  background: rgb(199, 101, 117);
  grid-area: sumac-color;
}

.toolbar{
 --background: #307442;
  
    
}
/* ion-title{
  --color: rgb(0, 0, 0)
} doesn't work */ 
.title{
  color: white;
}
#sec1{
	
	height: 50px;
	position: relative;
	display: flex;
	font-weight: 600;
	font-size: 22px;
	padding-top: 5px;
	padding-left: 10px;
;
}
hr {
	position: relative;
	margin: auto;
	background-color: grey;
	height: 2px;
	border-radius: 20px;
	margin-top: 3px;
	width: 50%;
}
#sec4{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;
	
	grid-template-columns: 30% 67%;

	gap: 5px
}



</style>
