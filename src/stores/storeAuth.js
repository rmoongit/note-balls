import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/js/firebase';

export const useAuthStore = defineStore({
  id: 'storeAuth',

  state: () => {
    return {};
  },

  actions: {
    //register user fn
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log('user:', user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    //login user fn
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('user :', user);
        })
        .catch((error) => {
          console.log('error:', error.message);
        });
    },
    //log out user fn
    logOutUser() {
      signOut(auth)
        .then(() => {
          console.log('logOut', auth);
        })
        .catch((error) => {
          console.log('error:', error.message);
        });
    },
  },
});
