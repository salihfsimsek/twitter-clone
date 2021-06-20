import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCBy_j8TW-1Vp6CM-n14pmpWAuNnd8J8ww",
    authDomain: "tailwind-exercise.firebaseapp.com",
    projectId: "tailwind-exercise",
    storageBucket: "tailwind-exercise.appspot.com",
    messagingSenderId: "177687970875",
    appId: "1:177687970875:web:3d55afb5f9f2bb861e081e"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const db = firebase.firestore()

export default db