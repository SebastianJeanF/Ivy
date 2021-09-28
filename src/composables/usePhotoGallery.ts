// import { ref, onMounted, watch } from 'vue';
// import { Camera, CameraResultType, CameraSource, Photo, ImageOptions } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem'
// import { Storage } from '@capacitor/storage'


// export interface UserPhoto {
//     filepath: string;
//     webviewPath?: string;
//   }
//   // We created a new type to define our Photo,
//   // which will hold specifc metadata


// export function usePhotoGallery() {
       
// // You may need "const { camera } = Plugins" here

//     // Vue's "ref" makes the variable reactive (This is an array)
//     const photos = ref<UserPhoto[]>([]);
    
//     const savePicture = async (
//       photo: Photo,
//       fileName: string,
//     ): Promise<UserPhoto> => {
//       let base64Data: string;
    
//       // Fetch the photo, read as a blob, then convert to base64 format
//       const response = await fetch(photo.webPath!);
//       const blob = await response.blob();
//       base64Data = (await convertBlobToBase64(blob)) as string;
    
//       const savedFile = await Filesystem.writeFile({
//         path: fileName,
//         data: base64Data,
//         directory: Directory.Data,
//       });
    
//       // Use webPath to display the new image instead of base64 since it's
//       // already loaded into memory
//       return {
//         filepath: fileName,
//         webviewPath: photo.webPath,
//       };
//     };


//     const takePhoto = async () => {
//       const cameraPhoto = await Camera.getPhoto({
//         resultType: CameraResultType.Uri,
//         source: CameraSource.Camera,
//         quality: 100,
//       });
  
//       const fileName = new Date().getTime() + '.jpeg';
//       const savedFileImage = await savePicture(cameraPhoto, fileName);
  
//       photos.value = [savedFileImage, ...photos.value];
//     };


    


//   const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onerror = reject;
//     reader.onload = () => {
//         resolve(reader.result);
//     };
//     reader.readAsDataURL(blob);
// });





//     // takePhoto is a method   

//             //const savedFileImage = {
//            // filepath: fileName,
//             //webviewPath: cameraPhoto.webPath
//        // };



    

  
//     return { 
//     photos,
//     takePhoto
//     };
// }