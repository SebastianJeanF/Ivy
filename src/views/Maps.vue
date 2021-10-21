<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
        <ion-toolbar class="toolbar" >
        <ion-title>Welcome to IvyFinder</ion-title>    
   </ion-toolbar>
    <ion-content class="pages" >
        <div>

         <div class="custom-shape-divider-top-1633904058">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
        </div>


          <header class= "header ion-padding">
            
          <h3><b>Map Gallery</b></h3>
        </header>
         <swiper style="background-color: transparent" :spaceBetween="50"  :slidesPerView="1" :navigation="true" :pagination="true" :history='{
              "key": "slide"
            }' class="mySwiper">
             <!-- rgba(121, 200, 241, 0.1) color used !-->
          <swiper-slide style="background-color: transparent">
              <ion-card>
                <ion-card-content>  
                  <img class="image" src="./IvyMaps/EasternPoisonIvyMap.png"/>
                  <ion-text>
                    <img class="logo" src="./poison-ivy-test2.jpg" style="width:100px;height:100px;"/>
                    <div class="text">Poison Ivy (Eastern)</div>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </swiper-slide>

            <swiper-slide style="background-color: transparent">
                       
              <ion-card>
                <ion-card-content>
                  <img class="image" src="./IvyMaps/WesternPoisonIvyMap.png"/>
                   
                  <ion-text>
                    <img class="logo" src="./bladdernut.jpg" style="width:400px;height:200px;"/>
                    <div class="text">Western Poison Ivy</div>
                <!-- #1b7837 color for Western Poison Ivy !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
            <swiper-slide style="background-color: transparent"> 
              <ion-card>
                <ion-card-content>
                   <img class="image" src="./IvyMaps/AtlanticPoisonOakMap.png"/>
                  
                  <ion-text>
                    <img class="logo" src="./bladdernut.jpg" style="width:400px;height:200px;"/>
                    <div class="text">Atlantic Poison Oak </div>
                <!-- #ff7f00 color for Poison Oak Atlantic !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              <swiper-slide style="background-color: transparent">
              <ion-card>
                <ion-card-content>
                   <img class="image" src="./IvyMaps/PacificPoisonOakMap.png"/>
                  
                  <ion-text>
                    <img class="logo" src="./bladdernut.jpg" style="width:400px;height:200px;"/>
                    <div class="text">Pacific Poison Oak</div>
                <!-- #fc4e2a color for Pacific Poison Oak !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              <swiper-slide style="background-color: transparent">
              <ion-card>
                <ion-card-content>
                  <img class="image" src="./IvyMaps/PoisonSumacMap.png"/>
                  <ion-text>
                    <img class="logo" src="./bladdernut.jpg" style="width:400px;height:200px;"/>
                    <div class="text">Poison Sumac</div>
                <!-- #f781bf color for Sumac !-->
                  </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              </swiper>
          <div id="map"></div>
          <section>
            
            <h1>Nice Curves</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, explicabo qui quidem quia quam cum dolore atque. Laboriosam impedit vel, porro perspiciatis, laudantium earum ipsam id non molestiae vero esse!</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Debitis, mollitia! Voluptates nesciunt assumenda officiis, quos consectetur ab debitis nihil sunt recusandae ea sit consequuntur harum, hic autem illo facilis. Quis nemo, delectus illo pariatur quos corrupti voluptatem tempore.</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Odio hic perspiciatis iste repellat, nam autem voluptate labore numquam molestiae, magnam pariatur asperiores aperiam nisi ipsam, nostrum at qui vero temporibus iusto quis fugiat ullam sunt. Aliquam, optio iusto.</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Voluptatem dolorem ex a obcaecati ullam ad accusamus tenetur nihil labore! Repellendus ex, autem dignissimos officia obcaecati veritatis? Deleniti rerum itaque aut ipsa. Tempora, optio saepe reiciendis ad soluta earum?</p>
          </section>

        <ion-card-header>
          </ion-card-header>
        <ion-card-title>
        </ion-card-title>
        <ion-card-subtitle>
        </ion-card-subtitle>
        </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/lazy/lazy.min.css";
import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,History,Lazy
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,History,Lazy]);

export default  {
  name: 'Maps',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonText, Swiper, SwiperSlide},
};




</script>

<style scoped>
swiper-slide{
  background-color: transparent
}
ion-text{
  padding-top: 5px;
  display: grid;
  grid-template-columns: 40% 60%;
}

ion-card{
	box-shadow: none;
  background-color: transparent
}
ion-card-content{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  font-weight: 700;
  font-size: 20px;
  background-color: transparent
}

.image{
 
  border-radius: 15px
}
.header {
  position: relative;
  margin: auto;
  width: 80%;
  border-radius: 30px 30px 30px 30px;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

section {
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10vw;
}



.custom-shape-divider-top-1633904058 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1633904058 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 55px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1633904058 .shape-fill {
    fill: #307442;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1633904058 svg {
        width: calc(100% + 1.3px);
        height: 90px;
    }
}

.test{
    --background: none;
    aspect-ratio: 600/900;
    background-image: url('./layer1.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>