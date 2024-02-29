const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Persistent todo list",
      todoList: [],
      newTask: { name: "", done: false },
    };
  },

  methods: {
    fetchTaskArray() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/get-list.php")
        .then((response) => {
          this.todoList = response.data;
        });
    },

    addNewTask(item) {
      console.log("task da aggiungere " + this.newTask.name);

      this.newTask = { name: "", done: false };

      const data = { item: { name: "Task 6", done: false } };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post(
          "http://localhost/php-todo-list-json/backend/api/store-item.php",
          data,
          params
        )
        .then((response) => {
          console.log(response.data);

          this.todoList = response;
        });
    },
  },

  mounted() {
    this.fetchTaskArray();
  },
});

app.mount("#app");
