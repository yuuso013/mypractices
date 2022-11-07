// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4kqYKPWSI5pmW-S3YbJrR_LjhkDj80Q",
  authDomain: "mypracticesdates.firebaseapp.com",
  projectId: "mypracticesdates",
  storageBucket: "mypracticesdates.appspot.com",
  messagingSenderId: "974016051337",
  appId: "1:974016051337:web:968a684aa4ffcb6cc86e58",
  measurementId: "G-RQZVM74G78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);