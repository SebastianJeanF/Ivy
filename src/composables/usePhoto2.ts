// import { ref} from 'vue';
// import { Capacitor } from '@capacitor/core';
// import {
//   Camera,
//   CameraSource,
//   CameraResultType,
//   Photo,
// } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';


// import { isPlatform } from '@ionic/vue';

// export function usePhotoGallery() {
//   const photos = ref<UserPhoto[]>([]); //ref is a vue function which makes photo reactive
  



//   const convertBlobToBase64 = (blob: Blob) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onerror = reject;
//       reader.onload = () => {
//         resolve(reader.result);
//       };
//       reader.readAsDataURL(blob);
//     });

//   const savePicture = async (
//     photo: Photo,
//     fileName: string
//   ): Promise<UserPhoto> => {
//     let base64Data: string;
//     // "hybrid" will detect Cordova or Capacitor (mobile - iOS or Android);
//     if (isPlatform('hybrid')) {
//       const file = await Filesystem.readFile({
//         // eslint-disable-next-line
//         path: photo.path!,
//       });
//       base64Data = file.data;
//     } else {
//       // Fetch the photo, read as a blob, then convert to base64 format
//       // eslint-disable-next-line
//       const response = await fetch(photo.webPath!);
//       const blob = await response.blob();
//       base64Data = (await convertBlobToBase64(blob)) as string;
//     }

//     // savedFile method applying in both scenarios
//     const savedFile = await Filesystem.writeFile({
//       path: fileName,
//       data: base64Data,
//       directory: Directory.Data,
//     });

//     if (isPlatform('hybrid')) {
//       // Display the new image by rewriting the 'file://' path to HTTP
//       // Details: https://ionicframework.com/docs/building/webview#file-protocol
//       return {
//         filepath: savedFile.uri,
//         webviewPath: Capacitor.convertFileSrc(savedFile.uri),
//       };
//     } else {
//       // Use webPath to display the new image instead of base64 since it's
//       // already loaded into memory
//       return {
//         filepath: fileName,
//         webviewPath: photo.webPath,
//       };
//     }
//   };

//   const takePhoto = async () => {
//     const cameraPhoto = await Camera.getPhoto({
//       resultType: CameraResultType.Uri,
//       source: CameraSource.Camera,
//       quality: 100,
//     });
//     const fileName = new Date().getTime() + '.jpeg';
//     const savedFileImage = await savePicture(cameraPhoto, fileName);

//     photos.value = [savedFileImage, ...photos.value];
//   };

//   };



  
//   return {
//     photos,
//     takePhoto
//   };
// }


// export interface UserPhoto {
//   filepath: string;
//   webviewPath?: string;
// }
