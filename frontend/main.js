const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Persistent todo list",
      todoList: [
        { name: "Task 1", done: false },
        { name: "Task 2", done: false },
        { name: "Task 3", done: false },
        { name: "Task 4", done: false },
        { name: "Task 5", done: false },
      ],
    };
  },
});

app.mount("#app");
