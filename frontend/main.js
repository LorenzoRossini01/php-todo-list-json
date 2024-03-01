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
      axios.get("../backend/api/get-list.php").then((response) => {
        this.todoList = response.data;
      });
    },

    addNewTask() {
      console.log("task da aggiungere " + this.newTask.name);

      const data = { name: this.newTask.name, done: false };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/store-item.php", data, params)
        .then((response) => {
          console.log(response.data);

          // this.todoList = response.data;
        });
    },

    updateTaskStatus(index, task) {
      console.log(index, task);
      const newStatus = !task.done;

      const data = { index, text: task.text, done: newStatus };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/update-item.php", data, params)
        .then((response) => {
          console.log(response.data);

          // this.todoList = response.data;
        });
    },

    deleteTask(index) {
      console.log(index);

      const data = { index };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/delete-item.php", data, params)
        .then((response) => {
          console.log(response.data);

          this.todoList = response.data;
        });
    },
  },

  mounted() {
    this.fetchTaskArray();
  },
});

app.mount("#app");
