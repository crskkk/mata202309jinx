// FIREBASE CONFIG OBJECT
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwda_vwwSM3Ysd8MEa73IjI7ecrWX0ixo",
  authDomain: "mata202309jinx.firebaseapp.com",
  projectId: "mata202309jinx",
  storageBucket: "mata202309jinx.appspot.com",
  messagingSenderId: "934386610035",
  appId: "1:934386610035:web:9938d0cd220d303b885f06"
};

// IMPORT FIREBASE, INIT APP AND SERVICES
  // Firebase itself (+ web?)
import { 
    initializeApp 
} from 'firebase/app'
const app = initializeApp(firebaseConfig)

// Firestore, the database. Implementation later on
import { 
    getFirestore, collection, onSnapshot,
    // query, where, orderBy,
    // serverTimestamp
 } from 'firebase/firestore'
const db = getFirestore()
  // Auth. Plus Auth implementation
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

// Signing users (where's acc creation?)
// initialize
const auth = getAuth()

// General selector for the “Form” and Inputs
const authForm = document.querySelector('.auth')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signUpButton = document.querySelector('#signUpButton')
const signInButton = document.querySelector('#signInButton')
// const signOutButton = document.querySelector('#signOutButton')

// SignUp
signUpButton.addEventListener('click', ()=>{
  const aemail = email.value
  const apassword = password.value
  createUserWithEmailAndPassword(auth,aemail,apassword)
  .then((cred)=>{
    console.log(cred.user)
    // RESUME: Hide\Show\Sh
    document.getElementById("email").remove()
    document.getElementById("password").remove()
    document.getElementById("signUpButton").remove()
    document.getElementById("signInButton").remove()
  })
  .catch((err)=>{
    console.log(err.code + err.message)
  })
})

// RESUME HERE
// Login
signInButton.addEventListener('click', ()=>{
  const aemail = email.value
  const apassword = password.value
  signInWithEmailAndPassword(auth, aemail, apassword)
  .then(cred =>{
    console.log('user logged in:', cred.user)
    //
    document.getElementById("email").remove()
    document.getElementById("password").remove()
    document.getElementById("signUpButton").remove()
    document.getElementById("signInButton").remove()
  })
})


// Logout
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed:', user)
  })

//  Firestore implementation:
//  Load a Firestore collection, make a promise gets collection data
//  Use arrow function cause?
// // const colRef = collection(db, 'books')
// // onSnapshot(colRef, (snapshot) => {
// //         let books = []
// //         snapshot.docs.forEach((doc) => {
// //             books.push({ ...doc.data(), id: doc.id })

// //             const h2Element = document.createElement("h2")
// //             h2Element.setAttribute('id', doc.id)
// //             h2Element.setAttribute('contenteditable', "true")
            
// //             h2Element.innerText = books[books.length -1].author+", "+books[books.length -1].title
// //             document.body.appendChild(h2Element)
// //         })
// //         console.log(books)
// //     })
// //     // Standard error catcher
// //     .catch(err => {
// //         console.log(err.message)
// //     })

