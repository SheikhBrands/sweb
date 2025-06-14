// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';
// import { getStorage } from 'firebase/storage';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAv9ddkdzjFa0WIXGIBSp-IDWiEiKMQ_h8",
    authDomain: "sweb-3657c.firebaseapp.com",
    projectId: "sweb-3657c",
    storageBucket: "sweb-3657c.firebasestorage.app",
    messagingSenderId: "612237357685",
    appId: "1:612237357685:web:91ca4a3803ffcecf3c7e3c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);
export default app;