import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCN1aDKTcvFwKkV_E16UwXE8E3pFaA2otg",
  authDomain: "auth-redux-fa6d5.firebaseapp.com",
  projectId: "auth-redux-fa6d5",
  storageBucket: "auth-redux-fa6d5.appspot.com",
  messagingSenderId: "822926965686",
  appId: "1:822926965686:web:1b2cc9ead32cea9c859f17"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }