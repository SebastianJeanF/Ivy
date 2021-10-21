<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">



      <input type="file" @change="onFileSelected" />
      <ion-button @click="onUpload">Click me</ion-button>
      <button class="button" @click="onUpload">Click me</button>
      <button @click="takePhoto">
        Take pick
      </button>


      <ion-grid>
        <ion-row>
     <ion-col size="6" :key="photo" v-for="photo in photos">
 
          </ion-col> 
        </ion-row>
      </ion-grid>

      
    </ion-content>
  </ion-page>
</template>

<script >
import { camera, trash, close } from 'ionicons/icons';
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
  IonButton
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
    IonButton
  },
  data () {
      return {
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
    takePhoto
    }
  },
  methods: { 
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
      // This is the file the user selecetd
    },
    // Now we want to send an HTTP Request to an API endpoint
    // that accepts the file
    // This job can be done in binary format or form data
    // Form data is a JavaScript object that mixes normal fields
    // and files and packeges it into one request body to be sent
    // to the back end
    onUpload(){ 
      const fd = new FormData;
      fd.append('photo', this.selectedFile, this.selectedFile.name)
      console.log("this is fd, or probably data", fd)
      axios.post('http://10.0.0.22:5000/detect', fd)
      .then(function (response) {
        console.log('this is response', response);
      })
      .catch(function (e) {
        console.log(e);
      });
    },
  }
}

</script>

<style scoped>
.toolbar{
  --ion-background-color: #307442;
  color: white;
}
.button{
  transform: translateY(150%)

}
</style>
