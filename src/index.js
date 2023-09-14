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
import { initializeApp } from 'firebase/app'
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, getDocs } from 'firebase/firestore'
const db = getFirestore()

// PLAYGROUND
// Load a Firestore collection, make a promise gets collection data
// Use arrow function cause?
const colRef = collection(db, 'books')
getDocs(colRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
            const h1Element = document.createElement("h1")
            h1Element.innerText = books[books.length -1]
            document.body.appendChild(h1Element)
        })
        
    })
    // Why?
    .catch(err => {
        console.log(err.message)
    })

// H1ement
const h1Element = document.createElement("h1")
h1Element.innerText = "Hella Under My Umbrella"
document.body.appendChild(h1Element)