const vueElement = new Vue({
    el: "body main",
    data: {
        newTask: "",
        newTagColor: "",
        tasks: [
            {
                task: "Fare la spesa",
                tagColor: "black",
            },
            {
                task: "Comprare la lana",
                tagColor: "lightgray",
            },
            {
                task: "Programmare",
                tagColor: "black",
            },
            {
                task: "Cucinare",
                tagColor: "lightgray",
            },
            {
                task: "Andare dal dentista",
                tagColor: "gray",
            }
        ],
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            const auxNewTask = {
                task: this.newTask,
                tagColor: this.newTagColor,
            };
            if (this.newTask.trim() != "") {
                this.tasks.push(auxNewTask);
                this.newTask = "";
                this.newTagColor = "";
            }
        }
    }
})