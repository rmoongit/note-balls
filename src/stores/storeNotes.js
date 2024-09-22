import { defineStore } from 'pinia';

import { dataBase } from '@/js/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
      const allNotes = await getDocs(collection(dataBase, 'notes'));
      allNotes.forEach((doc) => {
        let note = {
          id: doc.id,
          text: doc.data().text,
        };

        this.notes.unshift(note);
      });
    },
    // add New note
    addNote(newValue) {
      const currentDate = new Date().getTime();
      const id = currentDate.toString();

      const createNote = {
        id: id,
        text: newValue,
      };

      this.notes.unshift(createNote);
    },
    // delete note by click
    deleteNote(id) {
      const filteredArray = this.notes.filter((note) => note.id !== id);

      this.notes = filteredArray;
    },
    // update content text
    updateContentNote(id, content) {
      const findIndex = this.notes.findIndex((note) => note.id === id);

      this.notes[findIndex].text = content;
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
