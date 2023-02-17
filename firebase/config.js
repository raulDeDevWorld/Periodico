import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCz6-81rIlsixQzgB5WsIb6GfvqGpWu4-4",
  authDomain: "hoy-bo-bd.firebaseapp.com",
  databaseURL: "https://hoy-bo-bd-default-rtdb.firebaseio.com",
  projectId: "hoy-bo-bd",
  storageBucket: "hoy-bo-bd.appspot.com",
  messagingSenderId: "332334893181",
  appId: "1:332334893181:web:1295ead91957c8b395c914"
};
// 


export const app = initializeApp(firebaseConfig)
