const fib = {
    *[Symbol.iterator]() {
        let prev = 0
        let curr = 1
        while(curr < 100) {
            yield curr
            let temp = prev
            prev = curr
            curr = temp + curr
        }
    }
}

for (const num of fib) {
    console.log(num)
}