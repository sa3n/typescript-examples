class Chain {
    public value
    constructor() {
        this.value = 0
    }
    plus(value: number): Chain {
        this.value += value
        return this
    }
    minus(value: number): Chain {
        this.value -= value
        return this
    }
}

const chain = new Chain()

chain.plus(10).minus(3)

console.log(chain.value)