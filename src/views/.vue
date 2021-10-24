<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
       <ion-segment @ionChange="segmentChanged($event)">
        <ion-segment-button>
          <ion-icon :icon="leafOutline"></ion-icon><ion-label>Basics</ion-label></ion-segment-button>
        <ion-segment-button><ion-icon :icon="leafOutline"></ion-icon><ion-label>Faq</ion-label></ion-segment-button>
      </ion-segment>

      <input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />

      <!-- <input style="display: none" type="file" @change="onFileSelected" ref="fileInput"/> -->
      <section class="gallery">
      <img :src="image" alt="Loading">
      <ion-button @click="$refs.fileInput.click()">Upload your File</ion-button>
      <img :src="image2"  alt="Awaiting model"> 
      <ion-button @click="onUpload">Run Model!</ion-button>
      </section>
      <!-- <input type="file" @change="onFileSelected" />
      <ion-button @click="onUpload">Click me</ion-button>
      <button class="button" @click="onUpload">Click me</button>
      <button @click="takePhoto">
        Take pick
      </button> -->


      <ion-grid>
        <ion-row>
     <ion-col size="6" :key="photo" v-for="photo in photos">
 
          </ion-col> 
        </ion-row>
      </ion-grid>

      <div style="margin-bottom: 160px"></div>
    </ion-content>
  </ion-page>
</template>

<script >
import { camera, trash, close, leafOutline } from 'ionicons/icons';
import axios from 'axios';
import { takePhoto } from '@/composables/PhotoIvy';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegmentButton,
  IonSegment,
  IonIcons
} from '@ionic/vue';



export default  {
  name: 'Tab3',
  components: {
    IonHeader,
    IonFab,
    IonIcon,
    IonFabButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonSegmentButton,
    IonSegment,
    IonIcons
  },
  data () {
    
    return{
    IonHeader,
    IonFab,
    IonIcon,
    IonFabButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    selectedFile: null,
    takePhoto,
    leafOutline,
    // image: "https://ivy-model.herokuapp.com/static/uploads/bushkillervine.jpg",
    image: 'https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400',
    image2: null,
    }
  },
  methods: { 
    onFileSelected(event) {
      console.log("This is event: " + event)
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
      this.image = URL.createObjectURL(this.selectedFile);
      // This is the file the user selecetd
    },


    // Now we want to send an HTTP Request to an API endpoint
    // that accepts the file
    // This job can be done in binary format or form data
    // Form data is a JavaScript object that mixes normal fields
    // and files and packeges it into one request body to be sent
    // to the back end
    onUpload(){ 
      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
      const fd = new FormData;
      fd.append('photo', this.selectedFile, this.selectedFile.name)
      console.log("this is fd, or probably data", fd)
      axios.post('https://ivy-model.herokuapp.com/detect', fd)
      //  axios.post('http://10.0.0.22:5000/detect', fd)
      .then((response) => {
        console.log(response)
        console.log("THis is data: " + response.data)
        this.image2 = "https://ivy-model.herokuapp.com" + response.data
        // this.image2 = "http://10.0.0.22:5000" + response.data
        console.log(this.image2)
        console.log("Success!")
      })
      .catch(function (e) {
        console.log(e);
      });
    },
  }
}

</script>

<style scoped>
.gallery{
  display: grid;
  grid-template-columns: 1fr ;
  justify-content: center
}
.toolbar{
  --ion-background-color: #307442;
  color: white;
}
.button{
  transform: translateY(150%)

}
</style>
