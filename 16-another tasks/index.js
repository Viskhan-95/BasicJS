
let countId = 0;

const toDo = {
    toDoList: [],

    findBy: function(key, value) {
        return this.toDoList.find(obj => obj[key] == value)
    },

    add: function(newTask) {
        if(this.findBy('title', newTask.title)) return 'Задача уже существует';
        if(this.findBy('priority', newTask.priority)) return 'Такой приоритет существует';

        this.toDoList.push(newTask);

        return 'Задача добавлена';
    },

    remove: function(id) {
        const index = this.toDoList.findIndex(obj => obj.id == id);
        if(index === -1) return 'Задача не найдена';

        this.toDoList.splice(index, 1);
        return 'Задача удалена'
    },

    update: function(updateTask) {
        if(!this.findBy('id', updateTask.id)) return 'Задача не найдена';
        if(this.findBy('title', updateTask.title)) return 'Задача уже существует';
        if(this.findBy('priority', updateTask.priority)) return 'Такой приоритет существует';

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

// console.log(toDo.add({title: 'Помыть посуду', id: ++countId, priority: 1}));
// console.log(toDo.add({title: 'Пойти гулять', id: ++countId, priority: 5}));
// console.log(toDo.add({title: 'Убраться', id: ++countId, priority: 3}));
// console.log(toDo.remove(4));
// console.log(toDo.update({title: 'Лучше отдохнуть', id: 2, priority: 6}));
// toDo.sort();
// console.log(toDo.toDoList);


// Надеюсь я правильно понял задачу)))
const newTask = {
    toDoList: [{
        id: 1,
        title: 'тест',
        description: 'Описание',
        priority: 0
    }]
};

newTask.findBy = toDo.findBy.bind(newTask);

toDo.add.call(newTask, {id: 2, title: 'тест2', description: 'Описание2', priority: 1});
console.log(newTask.toDoList);