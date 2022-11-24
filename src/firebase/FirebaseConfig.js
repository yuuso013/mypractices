//import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC9esplaV_WvNJoD14IivzPDV_DlCRJc2s",
    authDomain: "mypractices-a1a4a.firebaseapp.com",
    projectId: "mypractices-a1a4a",
    storageBucket: "mypractices-a1a4a.appspot.com",
    messagingSenderId: "948269050037",
    appId: "1:948269050037:web:daec7c624de452bc7776fc"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();


//export const app = initializeApp(firebaseConfig);
/*const db = getFirestore(app);

// Get a list of cities from your database
async function getAlumnos(db) {
  const alumnosCol = collection(db, 'alumnos');
  const alumnosSnapshot = await getDocs(alumnosCol);
  const alumnosList = alumnosSnapshot.docs.map(doc => doc.data());
  return alumnosList;
}
async function getTutores(db) {
  const tutoresCol = collection(db, 'tutores');
  const tutoresSnapshot = await getDocs(tutoresCol);
  const tutoressList = tutoresSnapshot.docs.map(doc => doc.data());
  return tutoressList;
}*/

//export default firebaseConfig;