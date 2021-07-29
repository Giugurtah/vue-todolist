const vueElement = new Vue({
    el: "body main",
    data: {
        newTask: {
            task: "",
            tagColor: "",
        },
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
            if (this.newTask.task.trim() != "") {
                this.tasks.push(this.newTask);
                this.newTask.task = "";
                this.newTask.tagColor = "";
            }
        }
    }
})