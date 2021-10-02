<template >
  <ion-page>
  <ion-header>
      <ion-toolbar class="toolbar" >
        <ion-title class="title">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header>
    <ion-content class="content">
          <header class= "header2 ion-padding">
            <h3><b>More Information</b></h3>  
          </header>
          <ion-icon class="test" size="large" :icon="leafOutline" />


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
            <ion-card class="sumac-color content">
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
.content{
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
 --background: #307442;
  

    
}
/* ion-title{
  --color: rgb(0, 0, 0)
} doesn't work */ 
.title{
  color: white;
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
