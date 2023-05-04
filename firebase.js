// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvoh2uWIVlv-ip8nhOu292LmYKJxOdqfc",
  authDomain: "fir-prac-180e3.firebaseapp.com",
  projectId: "fir-prac-180e3",
  storageBucket: "fir-prac-180e3.appspot.com",
  messagingSenderId: "987506658309",
  appId: "1:987506658309:web:bd13a4c8e3528eb095206c"
};

// Initialize Firebase

let app; 
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};