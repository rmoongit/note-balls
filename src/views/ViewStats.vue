<template>
  <section class="stats">
    <table class="table is-fullwidth is-family-code">
      <thead>
        <tr>
          <th class="is-size-4 is-dark has-text-white">Stats</th>
          <th class="is-size-4 is-dark has-text-white">Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="is-size-5">Sum of notes</td>
          <td class="is-size-5">{{ allNotesCount() }}</td>
        </tr>

        <tr>
          <td class="is-size-5">Characters of all notes</td>
          <td class="is-size-5">{{ allNotesCharacters() }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';

// store
const storeNotes = useNotesStore();

// all notes
const allNotesCount = () => {
  return storeNotes.getTotalNotes;
};

// all characters
const allNotesCharacters = () => {
  return storeNotes.getTotalCharacters;
};
</script>

<style scoped></style>
