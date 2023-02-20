import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTWns_TV0lxMj_T7QeO5ZLqtwKE3KJAYk",
  authDomain: "cooking-ninja-site-1b5c3.firebaseapp.com",
  projectId: "cooking-ninja-site-1b5c3",
  storageBucket: "cooking-ninja-site-1b5c3.appspot.com",
  messagingSenderId: "143193594811",
  appId: "1:143193594811:web:dd831080f62ab44545829e"
}

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }