// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnag5jM5z0acyPcreyGc626Dg5bpZrRbc",
	authDomain: "mern-book-inventory-f4ab3.firebaseapp.com",
	projectId: "mern-book-inventory-f4ab3",
	storageBucket: "mern-book-inventory-f4ab3.appspot.com",
	messagingSenderId: "74722224998",
	appId: "1:74722224998:web:2c8d30cb5397e383faf6a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
