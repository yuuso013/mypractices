import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./FirebaseConfig";


const collectionName51 = "alumnos51";
const collectionName52 = "alumnos52";
const collectionName53 = "alumnos53";
const collectionName61 = "alumnos61";
const collectionName62 = "alumnos62";
const collectionName63 = "alumnos63";
//-------------------------Quinto Primera----------------------------------------------

export const saveData51 = (newAlumno) =>
  addDoc(collection(db, collectionName51), newAlumno);

export const updateData51 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName51, id), updatedFields);

export const onGetData51 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName51), callback);
  return unsub;
};

export const getDatas51 = () => getDocs(collection(db, collectionName51));

export const deleteData51 = (id) => deleteDoc(doc(db, collectionName51, id));

export const getData51 = (id) => getDoc(doc(db, collectionName51, id));

//-------------------------Quinto Segunda----------------------------------------------
export const saveData52 = (newAlumno) =>
  addDoc(collection(db, collectionName52), newAlumno);

export const updateData52 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName52, id), updatedFields);

export const onGetData52 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName52), callback);
  return unsub;
};

export const getDatas52 = () => getDocs(collection(db, collectionName52));

export const deleteData52 = (id) => deleteDoc(doc(db, collectionName52, id));

export const getData52 = (id) => getDoc(doc(db, collectionName52, id));
//-------------------------Quinto Tercera----------------------------------------------
export const saveData53 = (newAlumno) =>
  addDoc(collection(db, collectionName53), newAlumno);

export const updateData53 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName53, id), updatedFields);

export const onGetData53 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName53), callback);
  return unsub;
};

export const getDatas53 = () => getDocs(collection(db, collectionName53));

export const deleteData53 = (id) => deleteDoc(doc(db, collectionName53, id));

export const getData53 = (id) => getDoc(doc(db, collectionName53, id));
//-------------------------Sexto Primera----------------------------------------------
export const saveData61 = (newAlumno) =>
  addDoc(collection(db, collectionName61), newAlumno);

export const updateData61 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName61, id), updatedFields);

export const onGetData61 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName61), callback);
  return unsub;
};

export const getDatas61 = () => getDocs(collection(db, collectionName61));

export const deleteData61 = (id) => deleteDoc(doc(db, collectionName61, id));

export const getData61 = (id) => getDoc(doc(db, collectionName61, id));
//-------------------------Sexto Segunda----------------------------------------------
export const saveData62 = (newAlumno) =>
  addDoc(collection(db, collectionName62), newAlumno);

export const updateData62 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName62, id), updatedFields);

export const onGetData62 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName62), callback);
  return unsub;
};

export const getDatas62 = () => getDocs(collection(db, collectionName62));

export const deleteData62 = (id) => deleteDoc(doc(db, collectionName62, id));

export const getData62 = (id) => getDoc(doc(db, collectionName62, id));
//-------------------------Sexto Tercera----------------------------------------------
export const saveData63 = (newAlumno) =>
  addDoc(collection(db, collectionName63), newAlumno);

export const updateData63 = (id, updatedFields) =>
  updateDoc(doc(db, collectionName63, id), updatedFields);

export const onGetData63 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName63), callback);
  return unsub;
};

export const getDatas63 = () => getDocs(collection(db, collectionName63));

export const deleteData63 = (id) => deleteDoc(doc(db, collectionName63, id));

export const getData63 = (id) => getDoc(doc(db, collectionName63, id));