import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIAAkV4-dgNJWzxAygC9ufKwLqarTeLTs",
    authDomain: "movie-app-cbb19.firebaseapp.com",
    projectId: "movie-app-cbb19",
    storageBucket: "movie-app-cbb19.appspot.com",
    messagingSenderId: "66895482159",
    appId: "1:66895482159:web:3605c50fa4d1941aba65da"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

