import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBE1L7Bpk5Kgw2KZWrqyfo1co2aAS6aFG0",
  authDomain: "movie-theatre-728f9.firebaseapp.com",
  projectId: "movie-theatre-728f9",
  storageBucket: "movie-theatre-728f9.appspot.com",
  messagingSenderId: "612925257921",
  appId: "1:612925257921:web:97a8a5cacc9aa791363c40",
};

const app = initializeApp(firebaseConfig);
export default app;