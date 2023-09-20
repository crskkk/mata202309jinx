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
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth'
// Signing users (where's acc creation?)
// initialize
const auth = getAuth()
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
        // console.log(cred.user)
        signupForm.reset()
        })
        .catch((err)=>{
            console.log(err.message)
        })
})

// PLAYGROUND
//  Firestore implementarion:
//  Load a Firestore collection, make a promise gets collection data
//  Use arrow function cause?
const colRef = collection(db, 'books')
onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })

            const h2Element = document.createElement("h2")
            h2Element.setAttribute('id', doc.id)
            h2Element.setAttribute('contenteditable', "true")
            
            h2Element.innerText = books[books.length -1].author+", "+books[books.length -1].title
            document.body.appendChild(h2Element)
        })
        console.log(books)
    })
    // Standard error catcher
    .catch(err => {
        console.log(err.message)
    })