import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBodNunMWRxvlN8cTARjrraAXNdnapOSDg",
  authDomain: "zhebrand.firebaseapp.com",
  projectId: "zhebrand",
  storageBucket: "zhebrand.appspot.com",
  messagingSenderId: "807787479432",
  appId: "1:807787479432:web:bb5a0272a3f37bce2d7a3d"
};


export function initFirebase() {
    initializeApp(firebaseConfig);
}


