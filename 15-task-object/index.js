
let countId = 0;

const toDo = {
    toDoList: [],

    findById: function(id) {
        return this.toDoList.find(obj => obj.id == id)
    },

    findByPriority: function(priority) {
        return this.toDoList.find(obj => obj.priority == priority)
    },

    findByTitle: function(title) {
        return this.toDoList.find(obj => obj.title == title)
    },

    add: function(newTask) {
        if(this.findByTitle(newTask.title)) return 'Задача уже существует';
        if(this.findByPriority(newTask.priority)) return 'Такой приоритет существует';

        this.toDoList.push(newTask);

        return 'Задача добавлена';
    },

    remove: function(id) {
        if(!this.findById(id)) return 'Задача не найдена';

        this.toDoList = this.toDoList.filter(obj => obj.id != id);
        return 'Задача удалена'
    },

    update: function(updateTask) {
        if(!this.findById(updateTask.id)) return 'Задача не найдена';
        if(this.findByTitle(updateTask.title)) return 'Задача уже существует';
        if(this.findByPriority(updateTask.priority)) return 'Такой приоритет существует';

        this.toDoList.map(obj => {
            if(obj.id == updateTask.id) {
                obj.title = updateTask.title,
                obj.priority = updateTask.priority
            }
        });

        return 'Задача изменена';
    },

    sort: function() {
        this.toDoList.sort((a, b) => a.priority - b.priority)
    }
}

console.log(toDo.add({title: 'Помыть посуду', id: ++countId, priority: 1}));
console.log(toDo.add({title: 'Пойти гулять', id: ++countId, priority: 5}));
console.log(toDo.add({title: 'Убраться', id: ++countId, priority: 3}));
console.log(toDo.remove(4));
console.log(toDo.update({title: 'Лучше отдохнуть', id: 2, priority: 6}));
toDo.sort();
console.log(toDo.toDoList)