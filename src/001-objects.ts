const Alice: { 
    name: string,
    age: number
} = {
    name: 'Alice',
    age: 25
}

class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const Bob = new Person('Bob', 27)

let hexDigits: {
    [id: string]: number
} = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15
}

let Eve: {
    readonly name: string,
    isAdmin?: boolean
} = {
    name: 'Eve'
}

// Eve.name = 'Eveline'