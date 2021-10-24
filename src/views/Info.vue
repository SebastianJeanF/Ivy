<template >
  <ion-page>
  <ion-header>
      <ion-toolbar>
        <ion-title>Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header>
    <ion-content class="content">

        
        
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

<header class="front">

  <div class="svg-item">
    <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
      <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
      <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
      <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="85 15" stroke-dashoffset="25"></circle>
      <g class="donut-text">

        <text y="50%" transform="translate(0, 2)">
          <tspan x="50%" text-anchor="middle" class="donut-percent">85%</tspan>   
        </text>
        <text y="60%" transform="translate(0, 2)">
          <tspan x="50%" text-anchor="middle" class="donut-data">Allergic</tspan>   
        </text>
      </g>
    </svg>
  </div>
<!-- https://codeconvey.com/pure-css-animated-donut-chart/ !-->


  <div class="info"><ion-text><h6>85% of people are allergic to urushiol. However, 
    immunity changes as you age and through renewed exposures to poison ivy, so <strong>it 
    is possible </strong>for an immune person to get a reaction</h6></ion-text></div>


	</header>

  <router-link to="FAQ">
  <header class="FAQ">
    <h4 style="text-align: center; padding-right: 5px">
      <b>Frequently Asked Questions</b></h4>
    <img src="./question-mark-sign.jpg"/>
    <h5>Look through even more common questions people have about poison ivy</h5>
  </header> 
  </router-link>

  <header class= "header2 ion-padding">
          <h3><b>More Information</b></h3>  
  </header>
         
         
  <div class="sec">
  <ion-text class="plant-title"><strong>More on Toxicondendrons</strong></ion-text>
    
  <section>     
          <router-link class="one" to="/poison-ivy">
          <ion-card class="red">
            <img src="./poison-ivy-test2.jpg" style="aspect-ratio: 3/2"  />
            <ion-card-header>
              <ion-card-title style="color: white">Poison Ivy</ion-card-title>
            </ion-card-header>  
            <waves></waves>
          </ion-card>
          </router-link>

          <router-link class="two" to="/poison-oak">
          <ion-card class="pink">
            <img src="./poison-oak-test.jpg" style="aspect-ratio: 3/2"  />
            <ion-card-header>
            <ion-card-title>Poison Oak</ion-card-title>
            </ion-card-header>
            <waves></waves>
          </ion-card>
          </router-link>

          <router-link class="three" to="/poison-sumac">
            <ion-card class="sumac-color">
              <img src="./sumac-not-public.jpg" style="aspect-ratio: 3/2"  />
              <ion-card-header>
              <ion-card-title class=title>Poison Sumac</ion-card-title> 
              </ion-card-header>
              <waves></waves>
            </ion-card>  
          </router-link>
 </section> 
 </div>
      <div class="footer"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonTitle, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonText, IonHeader, IonIcon, IonTabBar, IonTabButton } from '@ionic/vue';
import {leafOutline} from 'ionicons/icons';
import { onMounted } from 'vue';


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonText, IonCard, IonCardContent, IonCardTitle, IonCardHeader,
  IonToolbar, IonHeader, IonTitle},

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
ion-card{
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(0, 0, 0, 0.20);
}
.FAQ{
  margin: auto;
  width: 90%;
  background: linear-gradient(135deg, yellow, green);
  display: grid;
  grid-template-columns: 60% 40%;
  border-radius: 10px 10px 10px 10px;
  position: relative;
  height: 20%
}
.FAQ img{
  grid-row: span 2;
  height: 100%;
  border-radius: 0 10px 10px 0
}
.FAQ h4{
  justify-self: end
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


.svg-item {
    width: 100%;
    font-size: 16px;
    margin: 0 auto;
    animation: donutfade 4s;
    grid-area: svg-item;
    padding-top: 5px;
    padding-left: 5px;
    background: rgba(128, 0, 128, 0.1)
}

@keyframes donutfade {
  /* this applies to the whole svg item wrapper */
    0% {
        opacity: .2;
    }
    100% {
        opacity: 1;
    }
}

@media (min-width: 992px) {
    .svg-item {
        width: 80%;
    }
}

.donut-ring {
    stroke: #EBEBEB;
}

.donut-segment {
    transform-origin: center;
    stroke: #FF6200;
}

.donut-segment-2 {
    stroke: aqua;
    animation: donut1 3s;
}

.donut-segment-3 {
    stroke: #d9e021;
    animation: donut2 3s;
}

.donut-segment-4 {
    stroke: #ed1e79;
    animation: donut3 3s;
}

.segment-1{fill:#ccc;}
.segment-2{fill:aqua;}
.segment-3{fill:#d9e021;}
.segment-4{fill:#ed1e79;}

.donut-percent {
    animation: donutfadelong 1s;
}

@keyframes donutfadelong {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes donut1 {
    0% {
        stroke-dasharray: 0, 100;
    }
    100% {
        stroke-dasharray: 85, 15;
    }
}

.donut-text {
    fill: #FF6200;
}
.donut-text-1 {
    fill: aqua;
}
.donut-text-2 {
    fill: #d9e021;
}
.donut-text-3 {
    fill: #ed1e79;
}

.donut-label {
    font-size: 0.28em;
    font-weight: 700;
    line-height: 1;
    fill: #000;
    transform: translateY(0.25em);
}

.donut-percent {
    font-size: 0.5em;
    line-height: 1;
    transform: translateY(0.5em);
    
}

.donut-data {
    font-size: 0.12em;
    line-height: 1;
    transform: translateY(0.5em);
    text-align: center;
    text-anchor: middle;
    color:#666;
    fill: #666;
    animation: donutfadelong 1s;
}


</style>
