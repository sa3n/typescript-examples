function * fib(): IterableIterator<number> {
    let prev = 0
    let curr = 1
    while (true) {
        yield curr
        const temp = prev
        prev = curr
        curr = temp + curr
        // [prev, curr] = [curr, prev + curr]
    }
}

const it = fib()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())