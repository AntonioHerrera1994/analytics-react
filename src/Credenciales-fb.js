// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MtPlb0OjBaghKEgpYzANgmNHBTwEKJg",
  authDomain: "wait-list-d2b96.firebaseapp.com",
  projectId: "wait-list-d2b96",
  storageBucket: "wait-list-d2b96.appspot.com",
  messagingSenderId: "633478115629",
  appId: "1:633478115629:web:8354621c91306d289123a4"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;