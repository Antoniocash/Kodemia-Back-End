/* function greeting(name) {
    return `hola ${name}, buenas noches.`
}

const greetingAntonio = greeting("Antonio")


console.log(greetingAntonio)
 */


function randomName() {
    const names = ["Antonio", "Rafa", "Kim", "Damaris"]
    const index = Math.floor(Math.random() * (names.length - 1))
    return names[index]
}

console.log(randomName())
console.log(randomName())
console.log(randomName())
console.log(randomName())

