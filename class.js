class lectures {
    constructor(name, teacher, time, room) {
        this.name = name;
        this.teacher = teacher;
        this.time = time;
        this.room = room;
    }
    getname() {
        return this.name;
    }
}

const mathlesson = new lectures("math", "atez", "10:00", "A101");
console.log(mathlesson.getname());
