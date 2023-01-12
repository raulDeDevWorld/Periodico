import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBZkk7x_tGRbf-Yg_A7Y9QYcBQe7T9QtWU",
  authDomain: "periodico-hoy-bolivia.firebaseapp.com",
  databaseURL: "https://periodico-hoy-bolivia-default-rtdb.firebaseio.com",
  projectId: "periodico-hoy-bolivia",
  storageBucket: "periodico-hoy-bolivia.appspot.com",
  messagingSenderId: "618787391049",
  appId: "1:618787391049:web:98b34d2849d093d67e6198"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDlaGiclXf3fHDKwHUNPhqqpv3FQ0T79xY",
//   authDomain: "periodico-digital-26796.firebaseapp.com",
//   databaseURL: "https://periodico-digital-26796-default-rtdb.firebaseio.com",
//   projectId: "periodico-digital-26796",
//   storageBucket: "periodico-digital-26796.appspot.com",
//   messagingSenderId: "696124128319",
//   appId: "1:696124128319:web:766766e23a61a10dd3cc8a"
// };


export const app = initializeApp(firebaseConfig)
