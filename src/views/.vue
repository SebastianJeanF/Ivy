<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
    <ion-content class="pages">
        <div >
            <div class="custom-shape-divider-top-1631325369">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
          <header class= "header ion-padding">
            
            <h3><b>Welcome to Ivy Finder!</b></h3>
          </header>

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
          <section>
            <h1>Nice Curves</h1>
            <p>Minima nostrum, provident ullam odit optio id facere dolorum distinctio molestias consectetur quo. Quia quisquam, quasi asperiores molestiae reprehenderit in itaque, ipsam commodi maiores consequatur cupiditate eum incidunt veniam libero?</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Impedit sunt rerum magni eaque molestiae. Consectetur maiores deserunt eaque voluptatem optio rem tenetur, doloribus eum dolorem, reiciendis qui id ab accusamus at nesciunt a animi impedit incidunt quam ipsam?</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Quae nisi illum, adipisci reprehenderit numquam quisquam aspernatur velit cum maiores deserunt maxime dolorem? Dicta impedit, quos aperiam voluptatibus rerum aliquid quo, quibusdam cum tempore assumenda quas, ullam natus provident.</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Minima quia perferendis repellat pariatur libero culpa rerum vel, molestiae ut nulla nam ullam quo animi inventore ducimus commodi itaque corrupti dicta iusto doloremque in, ex amet. Est, voluptatum consequuntur.</p>

          </section>  
          

 
    
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent} from '@ionic/vue';

export default  {
  name: 'Tab4',
  components: { IonPage, IonContent}
}
</script>


<style scoped>
.header {
  position: relative;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  
  margin-top: 10vh;
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


</style>