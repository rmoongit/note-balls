import { defineStore } from 'pinia';

import { dataBase } from '@/js/firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const collectionRef = collection(dataBase, 'notes');

export const useNotesStore = defineStore({
  id: 'storeNotes',

  state: () => {
    return {
      notes: [],
    };
  },

  actions: {
    // get Notes
    async getNotes() {
      onSnapshot(collectionRef, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            text: doc.data().text,
          };
          notes.unshift(note);
        });
        this.notes = notes;
      });
    },
    // add New note
    async addNote(newValue) {
      const currentDate = new Date().getTime();
      const id = currentDate.toString();

      await setDoc(doc(collectionRef, id), {
        text: newValue,
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
