import { defineStore } from 'pinia';

export const useAboutStore = defineStore('about', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
