import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjHxgDtaNZ1Vvdg0yHZ2r8kWsmVeHKtwk",
  authDomain: "restaurantapp-daa78.firebaseapp.com",
  databaseURL: "https://restaurantapp-daa78-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-daa78",
  storageBucket: "restaurantapp-daa78.appspot.com",
  messagingSenderId: "551672215147",
  appId: "1:551672215147:web:40989fe4d9ec3b99f4232e"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
