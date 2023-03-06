interface Person {
    name: string,
    age: number,
}

interface Person { // подвергаются слиянию
    greet(): string
}

interface Teacher extends Person {
    subject: string
}

const alice: Teacher = {
    name: 'Alice',
    age: 25,
    subject: 'History',
    greet() {
        return 'Hello!'
    }
}

class Student implements Person {
    constructor(
        public name: string, 
        public age: number
    ) {}
    greet() {
        return `Hello, my name is ${this.name}`
    }
}

const bob = new Student('Bob', 30)