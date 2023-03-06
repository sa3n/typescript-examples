// public = anywhere
// private = only this class
// protected = this class and subclasses

class Person {
    constructor(
        public name: string, 
        protected age: number, 
        private secret: string
    ) {}
    getAge() {
        return this.age
    }
    getSecret() {
        return this.secret
    }
}

class Teacher extends Person {
    constructor(
        name: string, 
        age: number, 
        private subject: string
    ) {
        super(name, age, 'shh, secret')
    }
    getAge() {
        return this.age
    }
    // getSecret() {
    //     return this.secret // error
    // }
    getSubject() {
        return this.subject
    }
} 

const alice = new Teacher('Alice', 25, 'History')

alice.name
// alice.subject // error
// alice.age // error

