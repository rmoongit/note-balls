import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
  },
});
