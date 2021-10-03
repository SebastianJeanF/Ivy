
<template>
<ion-page>
    <ion-content class="content">
<swiper :pagination="true" class="mySwiper">
  <swiper-slide> <ion-card><ion-card-content><img src="./bladdernut.jpg"></ion-card-content></ion-card></swiper-slide><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>

  
<div class="container">
		<div class="card">
			<div class="icon">
				<ion-icon name="diamond-outline"></ion-icon>
			</div>
			<div class="content">
				<h2>Card One</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat dicta quam? Aperiam quae porro earum, fuga quasi molestias voluptate, reprehenderit natus voluptatem, aliquid culpa ea mollitia quas corrupti aliquam.</p>
			</div>
		</div>

		<div class="card">
			<div class="icon">
				<ion-icon name="earth-outline"></ion-icon>
			</div>
			<div class="content">
				<h2>Card Two</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat dicta quam? Aperiam quae porro earum, fuga quasi molestias voluptate, reprehenderit natus voluptatem, aliquid culpa ea mollitia quas corrupti aliquam.</p>
			</div>
		</div>

		<div class="card">
			<div class="icon">
				<ion-icon name="rocket-outline"></ion-icon>
			</div>
			<div class="content">
				<h2>Card Three</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat dicta quam? Aperiam quae porro earum, fuga quasi molestias voluptate, reprehenderit natus voluptatem, aliquid culpa ea mollitia quas corrupti aliquam.</p>
			</div>
		</div>
</div>
  </ion-content>
</ion-page>
</template>
<script>
import {IonPage, IonContent, IonCard, IonCardContent} from '@ionic/vue';
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
    IonCardContent
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }
  
}
</script>

<style scoped>

.content{
    padding-bottom: 80px;
}


*{
	/* margin: 0;
	padding: 0; */
	box-sizing: border-box;
	font-family: 'Ubuntu', sans-serif;
}
body 
{
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #3c2846;
} 
 .container 
{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.card
{
	position: relative;
	width: 320px;
	height: 450px;
	margin: 30px;
	background: #287bff;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	overflow: hidden;
	border-bottom-left-radius: 160px;
	border-bottom-right-radius: 160px;
	box-shadow: 0 15px 0 #fff,
	inset 0 -15px 0 rgba(255,255,255,0.25),
	0 45px 0 rgba(0,0,0,0.15);
}
.card::before
{
	content: '';
	position: absolute;
	top: -150px;
	left: -40%;
	filter: blur(5px);
	width: 100%;
	height: 150%;
	transform: rotate(35deg);
	background: linear-gradient(90deg,transparent,rgba(255,255,255,0.2));
	pointer-events: none;
}
.card:nth-child(1)
{
	background: linear-gradient(to bottom,#ff2ae0, #64b5f6);
}
.card:nth-child(2)
{
	background: linear-gradient(to bottom,#ffec61, #f321d7);
}
.card:nth-child(3)
{
	background: linear-gradient(to bottom,#24ff72, #9a4eff);
}
.card .icon 
{
	position: relative;
	width: 140px;
	height: 120px;
	background: #3c2846;
	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	box-shadow: 0 10px 0 rgba(0,0,0,0.1)
	inset 0 -8px 0 #fff;
	z-index: 1000;
}

.card .icon ion-icon 
{
	color: #fff;
	position: relative;
	font-size: 6em;
	z-index: 1;
	--ionicon-stroke-width: 24px;
}
.card .icon::before 
{
	content: '';
	position: absolute;
	top: 0;
	left: -50px;
	width: 50px;
	height: 50px;
	background: transparent;
	border-top-right-radius: 50px;
	box-shadow: 15px -15px 0 15px #3c2846;
}
.card .icon::after 
{
	content: '';
	position: absolute;
	top: 0;
	right: -50px;
	width: 50px;
	height: 50px;
	background: transparent;
	border-top-left-radius: 50px;
	box-shadow: -15px -15px 0 15px #3c2846;
}
.content
{
	position: absolute;
	width: 100%;
	padding: 30px;
	padding-top: 140px;
	text-align: center;
}
.content h2 
{
	font-size: 1.75em;
	color: #fff;
	margin-bottom: 10px;
}
.content p 
{
	color: #fff;
	line-height: 1.5em;
}

</style>