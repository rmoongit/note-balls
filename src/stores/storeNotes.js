import { defineStore } from 'pinia';

export const useNotesStore = defineStore({
  id: 'storeNotes',

  state: () => {
    return {
      notes: [],
    };
  },

  actions: {
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
  },
});
