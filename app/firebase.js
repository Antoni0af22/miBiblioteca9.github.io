import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDrgV61d7L4VbJD03LAV_g1LcGcL2oqpoI",
  authDomain: "mibiblioteca9-1.firebaseapp.com",
  projectId: "mibiblioteca9-1",
  storageBucket: "mibiblioteca9-1.appspot.com",
  messagingSenderId: "770685576796",
  appId: "1:770685576796:web:f528fd528db0db641ae899"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

//guardar libro
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });

//lista libros
export const getLibros() => getDocs(collection(db,'libros'));

export const onGetLibros = (callback) => onSnapshot(collection(db,'libros'),callback)
