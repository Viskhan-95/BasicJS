
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

    add: function(title, priority) {
        if(this.findByTitle(title)) return 'Задача уже существует';
        if(this.findByPriority(priority)) return 'Такой приоритет существует';

        countId++;
        this.toDoList.push({
            title,
            id: countId,
            priority
        });

        return 'Задача добавлена';
    },

    remove: function(id) {
        if(!this.findById(id)) return 'Задача не найдена';

        this.toDoList = this.toDoList.filter(obj => obj.id != id);
        return 'Задача удалена'
    },

    update: function(title, priority, id) {
        if(!this.findById(id)) return 'Задача не найдена';
        if(this.findByTitle(title)) return 'Задача уже существует';
        if(this.findByPriority(priority)) return 'Такой приоритет существует';

        this.toDoList.map(obj => {
            if(obj.id == id) {
                obj.title = title,
                obj.priority = priority
            }
        });

        return 'Задача изменена';
    },

    sort: function() {
        this.toDoList.sort((a, b) => a.priority - b.priority)
    }
}

console.log(toDo.add('Помыть посуду', 1));
console.log(toDo.add('Пойти гулять', 5));
console.log(toDo.add('Убраться', 3));
console.log(toDo.remove(4));
console.log(toDo.update('Лучше отдохнуть', 6, 2));
toDo.sort();
console.log(toDo.toDoList)