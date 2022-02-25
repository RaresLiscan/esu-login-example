import { initializeApp } from "firebase/app";;

const firebaseConfig = {
    apiKey: "AIzaSyDJs4nJhAW65FPfVYIXSBgSjT4uXRMrYV0",
    authDomain: "esu-login.firebaseapp.com",
    projectId: "esu-login",
    storageBucket: "esu-login.appspot.com",
    messagingSenderId: "226106322547",
    appId: "1:226106322547:web:3e0272683add3059eac406",
    measurementId: "G-ZH49Q47E39"
}
  
export const app = initializeApp(firebaseConfig);