const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Persistent todo list",
      todoList: [],
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
  },

  mounted() {
    this.fetchTaskArray();
  },
});

app.mount("#app");
