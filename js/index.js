const vueElement = new Vue({
    el: "body main",
    data: {
        tasks: [
            "Fare la spesa",
            "Comprare la lana",
            "Programmare",
            "Cucinare",
            "Andare dal dentista",
        ],
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
})