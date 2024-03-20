// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFummmIlQzP1hAv9ISDEw-CBWkwoAUY7U",
  authDomain: "resolute-point.firebaseapp.com",
  projectId: "resolute-point",
  storageBucket: "resolute-point.appspot.com",
  messagingSenderId: "958795281680",
  appId: "1:958795281680:web:cd1753b93323d42a5ca195",
  measurementId: "G-Y2JM6XFPCM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;