const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = null

        if (error) {
            reject(error)
        }
        resolve("Todo fino, pa")
    }, 5000)
})

console.log(myFirstPromise)

myFirstPromise
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})