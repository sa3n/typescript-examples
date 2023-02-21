// TYPES

type Person = {
    name: string,
    age: number,
    isAdmin?: boolean
}

type Cat = {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean
} 

// UNION AND INTERSECTION

type CatOrDog = Cat | Dog   // MUST includes properties of Cat and Dog
type CatAndDog = Cat & Dog  // MAY includes properties of Cat and Dog

// EXAMPLES

const Alice: Person = {
    name: 'Alice',
    age: 25
}

const Rex: CatAndDog = {
    name: 'Rex',
    purrs: false,
    barks: true
}

const Murzik: CatOrDog = {
    name: 'Murzik',
    purrs: true
}