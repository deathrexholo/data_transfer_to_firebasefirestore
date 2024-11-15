import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//make changes your config

const firebaseConfig = {
  apiKey: "AIbW5h0fywpfzM",
  authDomain: "test-9025f.firebaseapp.com",
  projectId: "test-9025f",
  storageBucket: "test-9025f.firebasestorage.app",
  messagingSenderId: "1030195647961",
  appId: "1:1030195647961:web:d2d624e48c88809be835c8",
  databaseURl: "htebaseio.com/",
};


// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const usersCollection = collection(db, "users");
//change data
const userData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

addDoc(usersCollection, userData)
  .then((docRef) => {
    console.log("Document written with ID:", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  export default(addDoc);
