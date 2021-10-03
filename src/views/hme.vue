<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
    <ion-content class="pages">
        
            <div class="custom-shape-divider-top-1631325369">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
          
          <header class= "header1 ion-padding">
            <div></div>
            <h3><b>Welcome to IvyFinder!</b></h3>
          </header>
          <div>lolll</div>
          <ion-title>lol</ion-title>
          <ion-title class="title">Explore</ion-title>


	
	
			
		
         <div class="container">
		<swiper :pagination="true" class="mySwiper swiperswiper">
			<swiper-slide class="swiperswipderslide">
		<div class="cards">
			<div class="imgBox">
				<div>
					<img src="design.png"/>
					<h2>Design</h2>
				</div>
			</div>
			<div class="overlay"></div>
			<div class="content">
				<h2>Design</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
		</div>
		</swiper-slide>

		<swiper-slide>
		<div class="cards">
			<div class="imgBox">
				<div>
					<img src="code.png">
					<h2>Code</h2>
				</div>
			</div>
			<div class="overlay"></div>
			<div class="content">
				<h2>Code</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
		</div>
</swiper-slide>
<swiper-slide>
		<div class="cards">
			<div class="imgBox">
				<div>
					<img src="launch.png">
					<h2>Launch</h2>
				</div>
			</div>
			<div class="overlay"></div>
			<div class="content">
				<h2>Launch</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
		</div>
		</swiper-slide>
		</swiper>
	</div>
	

<ion-grid>
  <ion-row>
    <ion-col>
     <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urishol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Identify if  
            </ion-card-content>
            <waves></waves>
          </ion-card>
    </ion-col>
    <ion-col>
     <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urishol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Lrem ipsum
            </ion-card-content>
            <waves></waves>
          </ion-card>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-align-self-center">
      <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urishol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Lrem ipsum,
            </ion-card-content>
            <waves></waves>
          </ion-card>
    </ion-col>
    <ion-col>
     <ion-card class="blue">
            <ion-card-header>
            <ion-card-title style="color: white">Urishol</ion-card-title>
            </ion-card-header>
            <ion-card-content style="margin:5px">
              Lrem ipsum, 
            </ion-card-content>
            <waves></waves>
          </ion-card>
    </ion-col>

  </ion-row>
</ion-grid>
          <!-- <div class="plant">
            <ion-thumbnail slot="end">
              <img src="./fern.png">
            </ion-thumbnail>
          </div> -->


 
    
        
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonThumbnail, IonRow, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent}  from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);



export default {
  name: 'homepage',
  components: { IonPage, IonContent, //IonThumbnail, 
  IonRow, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, Swiper, SwiperSlide},

}
</script>


<style scoped>
.header1 {
  position: relative;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.25), 6px 6px 20px 0 rgba(0, 0, 0, 0.20);
}
.header1 div{

  border-top: 6px solid green;
  border-radius: 5px;
  transform: translate(-10px, 0px)

}
.pages{
  
}
section {
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10vw;
}



.custom-shape-divider-top-1631325369 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1631325369 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 200px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1631325369 .shape-fill {
    fill: #307442;
}


.test{
    --background: none;
    aspect-ratio: 600/900;
    background-image: url('./layer1.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
}
.plant{
  position: relative;
  transform:translateX(30%);
  transform:translateY(-30%);
}

.tssitle{
  text-align:  center;
}








body
{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #333;
	font-family: 'Poppins', sans-serif;
}
.container
{
	position: relative;
	width: 1000px;
	display: flex;
	justify-content: space-around;
}
.container .cards
{
	position: relative;
	width: 300px;
	height: 400px;
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.container .cards:before
{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	background: rgba(255,255,255,.1);
	z-index: 20;
	pointer-events: none;
}
.container .cards:nth-child(1),
.container .cards:nth-child(1) .overlay
{
	background: linear-gradient(45deg,#3503ad,#f7308c)
}
.container .cards:nth-child(2),
.container .cards:nth-child(2) .overlay
{
	background: linear-gradient(45deg,#ccff00,#09afff)
}
.container .cards:nth-child(3),
.container .cards:nth-child(3) .overlay
{
	background: linear-gradient(45deg,#e91e63,#ffeb3b)
}
.container .cards .imgBox
{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.container .cards .imgBox h2
{
	margin: 10px 0 0;
    padding: 0;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.container .cards .overlay
{
	position: absolute;
	bottom: 20px;
	right: 20px;
	width: 50px;
	height: 50px;
	box-shadow: 0 2px 5px rgba(0,0,0,.2);
	box-sizing: border-box;
	cursor: pointer;
	border-radius: 50%;
	transition: 0.5s;
}
.container .cards .overlay:hover
{
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	box-shadow: none;
	opacity: 0.9;
	border-radius: 0;
}
.container .cards .overlay:before
{
	content: 'Read';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: #fff;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 1px;
	font-size: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	transition-delay: 0.5s;
}
.container .cards .overlay:hover:before
{
	display: none;
	transition-delay: 0s;
}
.container .cards .content
{
	padding: 20px;
	box-sizing: border-box;
	z-index: 1;
	pointer-events: none;
	opacity: 0;
	visibility: hidden;
	transition: 0s;
	color: #fff;
}
.container .cards .content h2
{
	margin: 0;
	padding: 0;
}
.container .cards .overlay:hover ~ .content
{
	opacity: 1;
	visibility: visible;
	transition: 0.2s;
	transition-delay: 0.5s;
}
.swiperswiper{
	background-color: transparent;
	
}

.swiperswiper .swiperswipderslide{

}

</style>