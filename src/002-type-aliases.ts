type Person = {
    name: string,
    age: number,
    isAdmin?: boolean
}

const Alice: Person = {
    name: 'Alice',
    age: 25
}

type Cat = {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean
} 

type CatOrDog = Cat | Dog   // МОЖЕТ включать свойства Cat и Dog
type CatAndDog = Cat & Dog  // ДОЛЖЕН включать свойства Cat и Dog

const Rex: CatAndDog = {
    name: 'Rex',
    purrs: false,
    barks: true
}

const Murzik: CatOrDog = {
    name: 'Murzik',
    purrs: true
}