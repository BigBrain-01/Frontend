// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPGXOoS4uYdgxmB4AGOxbGR_TKGFmoQLU",
  authDomain: "studytitans-1a271.firebaseapp.com",
  projectId: "studytitans-1a271",
  storageBucket: "studytitans-1a271.appspot.com",
  messagingSenderId: "705008614659",
  appId: "1:705008614659:web:cc74846566c93fabcb3d36",
  measurementId: "G-J8PJGST3HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;