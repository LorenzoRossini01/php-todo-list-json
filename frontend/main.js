const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Persistent todo list",
    };
  },
});

app.mount("#app");
