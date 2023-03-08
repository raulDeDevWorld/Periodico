import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD4QAmeTzYQT-QADWRGiRRYPBA4NHxP98c",
  authDomain: "hoy-bo-db-c485e.firebaseapp.com",
  databaseURL: "https://hoy-bo-db-c485e-default-rtdb.firebaseio.com",
  projectId: "hoy-bo-db-c485e",
  storageBucket: "hoy-bo-bd.appspot.com",
  messagingSenderId: "585146926149",
  appId: "1:585146926149:web:9150be28f4c4991a894f2c"
};

export const app = initializeApp(firebaseConfig)
