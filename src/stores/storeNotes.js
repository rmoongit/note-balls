import { defineStore } from 'pinia';

import { dataBase } from '@/js/firebase';
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { useAuthStore } from '@/stores/storeAuth';

let collectionRef;
let collectionQuery;
let getNotesSnapshot = null;

export const useNotesStore = defineStore({
  id: 'storeNotes',

  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },

  actions: {
    // initialize users/notes
    init() {
      // store
      const authStore = useAuthStore();

      collectionRef = collection(dataBase, 'users', authStore.user.id, 'notes');
      collectionQuery = query(collectionRef, orderBy('date', 'desc'));
      this.getNotes();
    },
    // get Notes
    async getNotes() {
      this.notesLoaded = false;

      getNotesSnapshot = onSnapshot(collectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            date: doc.data().date,
            text: doc.data().text,
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    // add New note
    async addNote(newValue) {
      const currentDate = new Date().getTime();
      const date = currentDate.toString();

      await addDoc(collectionRef, {
        text: newValue,
        date: date,
      });
    },
    // delete note by click
    async deleteNote(id) {
      await deleteDoc(doc(collectionRef, id));
    },
    // update content text
    async updateContentNote(id, content) {
      // Set the "content" field of the 'id'
      await updateDoc(doc(collectionRef, id), {
        text: content,
      });
    },

    // Clear Notes
    clearNotes() {
      this.notes = [];
      if (getNotesSnapshot) getNotesSnapshot(); //unsubscribe from any active listener
    },
  },

  getters: {
    // get text from added note
    getTextContent: (state) => {
      return (id) => {
        const filtered = state.notes.filter((note) => note.id === id);

        return { ...filtered[0] }.text;
      };
    },

    getTotalNotes: (state) => {
      return state.notes.length;
    },
    // get all characters from each note
    getTotalCharacters: (state) => {
      return state.notes.reduce((total, note) => {
        total += note.text.length;
        return total;
      }, 0);
    },
  },
});
