<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
    <ion-content class="pages">
        <div>
            <div class="custom-shape-divider-top-1631325369">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
          
          <header class= "header1 ion-padding">
            <div></div>
            <h3><b>Welcome to IvyFinder!</b></h3>
          </header>

          <section>
            <h1>Nice Curves</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, explicabo qui quidem quia quam cum dolore atque. Laboriosam impedit vel, porro perspiciatis, laudantium earum ipsam id non molestiae vero esse!</p>
          </section>
          <div class="plant">
            <ion-thumbnail slot="end">
              <img src="./fern.png">
            </ion-thumbnail>
          </div>


 
    
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonThumbnail} from '@ionic/vue';


export default {
  name: 'homepage',
  components: { IonPage, IonContent, IonThumbnail},

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

</style>