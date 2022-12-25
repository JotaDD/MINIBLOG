
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwqlEE0w49UoCMHNv7788uKa8uTxRcnTk",
  authDomain: "miniblog-2e679.firebaseapp.com",
  projectId: "miniblog-2e679",
  storageBucket: "miniblog-2e679.appspot.com",
  messagingSenderId: "884857672461",
  appId: "1:884857672461:web:aa732e694b790908ac5644"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }