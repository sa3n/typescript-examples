// REST PARAMS

function sum(...nums: number[]): number {
    return nums.reduce((p, c) => p + c, 0)
}

const arrowSum = (...nums: number[]) => nums.reduce((p, c) => p + c, 0)

// OPTIONAL PARAMS

function greet(message = 'hello', name?: string ): string {
    if (!name) {
        name = ''
    }
    return message + ', ' + name + '!'
}

// THIS

function foo(this: any, num: number) {
    return this.a + num
}

console.log(foo.call({ a: 5 }, 6))
console.log(foo.apply({ a: 5 }, [6]))

// OVERLOADING

type RangeFn = {
    (to: number): number[]
    (from: number, to: number): number[]
    (from: number, to: number, step: number): number[]
}

const range: RangeFn = (from: number, to?: number, step?: number): number[] => {
    const result: number[] = []
    if (!to) {
        to = from
        from = 0
    }
    if (!step) {
        step = 1
    }
    for (let i = from; i < to; i += step) {
        result.push(i)
    }
    return result
}

console.log(range(10))
console.log(range(10, 20))
console.log(range(10, 20, 2))

// POLYMORPHISM

type FilterFn <T> = {
    (elem: T): boolean
}

function filter <T> (arr: T[], fn: FilterFn <T> ) {
    const result = []
    for (const elem of arr) {
        if (fn(elem)) {
            result.push(elem)
        }
    }
    return result
}

console.log(filter([1, 2, 3, 4, 5], elem => elem % 2 === 0 ))
console.log(filter<string>(['say', 'goodbye', 'to', 'yesterday'], elem => elem.length < 4 )) // explicitly