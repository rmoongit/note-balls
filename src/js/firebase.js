import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTw26UB8bevEN7WbeFmfO56yJZZmUac-E',
  authDomain: 'noteballs-moon.firebaseapp.com',
  projectId: 'noteballs-moon',
  storageBucket: 'noteballs-moon.appspot.com',
  messagingSenderId: '916878174602',
  appId: '1:916878174602:web:19d5769ce37e936b2c4073',
};
// initialize firebase
const app = initializeApp(firebaseConfig);

//initialize data base in fireStore
export const dataBase = getFirestore(app);
