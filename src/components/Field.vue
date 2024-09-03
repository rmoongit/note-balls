<template>
  <div class="card-field p-4 has-background-dark mb-4">
    <div class="field">
      <label class="label has-text-white is-family-code"
        >Enjoy with your notes</label
      >
      <div class="control">
        <textarea
          class="textarea is-family-code"
          placeholder="Add a new note here..."
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-white has-text-dark is-size-7 is-family-code"
        >
          Add a new note
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-field {
  border-radius: 0.75rem;
}

textarea:focus-within {
  box-shadow: transparent;
  border-color: transparent;
}
</style>
