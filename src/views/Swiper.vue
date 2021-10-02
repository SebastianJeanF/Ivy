
<template>
<ion-page>
    <ion-content class="content">
<swiper :pagination="true" class="mySwiper">
  <swiper-slide> <ion-card><ion-card-content><img src="./bladdernut.jpg"></ion-card-content></ion-card></swiper-slide><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
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

</style>