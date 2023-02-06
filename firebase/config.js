import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDsyDIvCN0XtYEz8IO5wOxfBCC-wl7JWtc",
  authDomain: "hoy-bo.firebaseapp.com",
  databaseURL: "https://hoy-bo-default-rtdb.firebaseio.com",
  projectId: "hoy-bo",
  storageBucket: "hoy-bo.appspot.com",
  messagingSenderId: "229884353815",
  appId: "1:229884353815:web:a9b479d91d614894dcab52"
};
// 


export const app = initializeApp(firebaseConfig)
