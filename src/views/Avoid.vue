
<template>
<ion-page>
	<ion-header>
	<ion-toolbar>
        <ion-title>Welcome to IvyFinder</ion-title>    
		</ion-toolbar>
	</ion-header>
    <ion-content>
	<header class="front">
		<ion-card class="header-card">
			<ion-card-header>
				<ion-card-title>Ururshiol</ion-card-title>
				<ion-card-subtitle>Avoid</ion-card-subtitle>
			</ion-card-header>
		<ion-card-content>What to do</ion-card-content>
		</ion-card> 
			<ion-img :src="shieldHalfOutline"></ion-img>
	</header>
	<hr>
	<section id="sec1">How Urushiol Invades</section>
	<section id="sec4">
		<img class="sec4-img" src="./poison-ivy.jpg"/>
		<div class="sec4-div1">If you suspect you come in contact with </div>
	</section>
	<hr>
	<section id="sec1">How to Treat</section>
	<section id="sec2">
		<img class="sec2-img" src="./washing-hands.jpg"/>
		<div class="sec2-div1">If you suspect you come in contact with </div>
		<div class="sec2-div2"></div>
	</section>
	<hr>
	<section id="sec1">How to Protect Yourself</section>
	<section id="sec3">
		<img class="sec3-img" src="./washing-hands.jpg"/>
		<div class="sec3-div1">If you suspect you come in contact with </div>
		<div class="sec3-div2"></div>
	</section>
	<hidden class="hidden">
    <swiper :pagination="true" class="mySwiper" style="margin-top:25px">
		<swiper-slide> <ion-card><ion-card-content><img src="./bladdernut.jpg"></ion-card-content></ion-card></swiper-slide><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
	</swiper>
	</hidden>
	<div style="margin-bottom: 80px"></div>
  </ion-content>
</ion-page>
</template>
<script>
import { shieldHalfOutline} from 'ionicons/icons';
import {IonPage, IonContent, IonCard, IonCardContent, IonToolbar, IonHeader, IonCardSubtitle, IonCardHeader, IonCardTitle, IonImg} from '@ionic/vue';
// Import Swiper Vue.js components
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
  components: {
    Swiper,
    SwiperSlide,
    IonPage, 
    IonContent,
    IonCard,
    IonCardContent,
	IonToolbar,
	IonHeader,
	IonCardSubtitle,
	IonCardHeader,
	IonCardTitle,
	IonImg
  },
  data() {
    return {
        shieldHalfOutline
        
    };
  },
  methods: {
    
  }
  
}
</script>

<style scoped>
*{
	box-sizing: border-box;
}
ion-img{
	width: 40vw;
	height: 80%;
}
ion-toolbar{
	--border-color: transparent
}
ion-content{
	margin-bottom: 70px;
}
ion-card{
	box-shadow: none;
	--color: default;
}
img{
	border-radius: 8px;
}
#sec1{
	
	height: 50px;
	position: relative;
	display: flex;
	font-weight: bold;
	font-size: 24px;
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
#sec2{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	height: 200px;
	position: relative;
	display: grid;
	align-content: center;
	grid-template-columns: 40% 60%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
	"sec2-img sec2-div1"
	"sec2-div2 sec2-div2";
	gap: 5px
}
#sec4{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;
	
	grid-template-columns: 60% 37% 3%;
	grid-template-areas:
	"sec4-div1 sec4-img";
	gap: 5px
}
#sec3{
	position: relative;
	display: grid;
	grid-template-columns: 40% 60%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
	"sec2-img sec2-div1"
	"sec2-div2 sec2-div2";
	gap: 5px
}
.sec2-div1{
	grid-area: sec2-div1;
}
.sec2-div2{
	grid-area: sec2-div2;
}
.sec2-img{
	grid-area: sec2-img;
	margin-left: 2px
	
}
.sec4-img{
	grid-area: sec4-img;
	transform: translateY(-5px)
}
.sec4-div{
	grid-area: sec4-div;
}
#sec3{
	/*background: linear-gradient(180deg, #74f2ce, #7cffcb); */
	/* Successful Immigrant */
	height: 200px;
	position: relative;
	display: grid;
	align-content: center;
	
}
.header-card{
	width: 50vw;
	height: 80%;
	background: transparent;
	margin: 10px 20px 0px;
	--ion-box-shadow-color: red
}

.front{
	background: linear-gradient(180deg, rgb(89, 148, 89, .8), transparent);
	background: linear-gradient(180deg, rgb(89, 148, 89), rgb(123, 172, 123,.6));
	
	height: 200px;
	position: relative;
	display: flex;
	align-content: center;
}
.content{
    margin-bottom: 80px;
}





.hidden{
	display: none;
}
</style>