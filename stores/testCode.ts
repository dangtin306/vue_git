import { defineStore } from "pinia";

export const useTestCodeStore = defineStore("testCode", {
  state: () => ({
    count: 0,
    lastAction: "chua co gi",
  }),
  actions: {
    increment(source = "unknown") {
      this.count += 1;
      this.lastAction = `${source} tang count`;
    },
    reset(source = "unknown") {
      this.count = 0;
      this.lastAction = `${source} reset count`;
    },
  },
});
