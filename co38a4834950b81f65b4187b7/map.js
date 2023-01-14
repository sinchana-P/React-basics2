/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const numArray = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = numArray.map(x => x * x) 
    

console.log(squares)

/* or*/

const numbers = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const square = numbers.map(function(num) {
    return num * num
})

console.log(square)


/*

used arrow function :


Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

/* or */

const capitalizedd = names.map(name => name[0].toUpperCase() + name.slice(1))


console.log(capitalized)
console.log(capitalizedd)



/*

Used template string & arrow function


Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})

/* or */

const paragraphss = pokemon.map(mon => `<p>${mon}</p>`)


console.log(paragraphs)
console.log(paragraphss)