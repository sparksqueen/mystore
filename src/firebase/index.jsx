import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDBndhPm78iUv1-R_kIH_0_--IcjBUK6g0",
  authDomain: "mercado-regulado.firebaseapp.com",
  projectId: "mercado-regulado",
  storageBucket: "mercado-regulado.appspot.com",
  messagingSenderId: "334875548350",
  appId: "1:334875548350:web:4ae1616cc016386cd7dcef",
});

export const getFirebase = () => {
  return app;
};
export const getFirestore = () => {
  return firebase.firestore(app);
};
