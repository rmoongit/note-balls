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
  },
});
