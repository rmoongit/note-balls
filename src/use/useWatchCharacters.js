import { watch } from 'vue';

export const useWatchCharacters = (value, maxLength = 100) => {
  watch(value, (newValue) => {
    if (newValue.length === maxLength) {
      alert(`Your length max equal is ${maxLength}`);
    }
  });
};
