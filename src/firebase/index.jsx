import firebase from "firebase/app";
import "@firebase/firestore";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCOZlagtmB0mryY1py2dKE8hZ6KVbt6K98",
  authDomain: "coderhouse-firebase.firebaseapp.com",
  projectId: "coderhouse-firebase",
  storageBucket: "coderhouse-firebase.appspot.com",
  messagingSenderId: "628629055974",
  appId: "1:628629055974:web:b866503a84d3788e56ce27",
});
// Initialize Firebase

export const getFirebase = () => {
  return app;
};
export const getFirestore = () => {
  return firebase.firestore(app);
};
