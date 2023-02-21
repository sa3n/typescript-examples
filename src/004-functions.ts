function sum(...nums: number[]): number {
    return nums.reduce((p, c) => p + c, 0)
}

const arrowSum = (...nums: number[]) => nums.reduce((p, c) => p + c, 0)

function greet(message = 'hello', name?: string ): string {
    if (!name) {
        name = ''
    }
    return message + ', ' + name + '!'
}

function foo(this: any, num: number) {
    return this.a + num
}

// console.log(foo.call({a : 5}, 6))
// console.log(foo.apply({a : 5}, [6]))
