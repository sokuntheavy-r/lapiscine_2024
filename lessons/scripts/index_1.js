

//console.log("Hello console")

var myNumber = 31

//console.log(myNumber)

// This is an explanation about variables
var myName = "Sokuntheavy"

console.log(myName)

let myLastName = "Roeung"
const myAge1 = 36
const myAge2 = 37

// Numbers manipulation
let firstNb = 23
let result = firstNb + 12

// result = result + 10 :
result += 10

result -= 5

result *= 2

result /= 8

// console.log(result)

result = 14
const moduloResult = result % 3
console.log(moduloResult)


// Strings

const firstName = "Sokuntheavy"
const lastName = 'Roeung'

const sentence = 'Je m\'appelle Sokuntheavy'

// ES6 => 2015 vs JavaScript moderne
const introduction = `Je m'appelle Sokuntheavy`

// const fullName = firstName + " " + lastName
const fullName = `${firstName} --- ${lastName}`
console.log(fullName)

let name1 = "J'habite à "
name1 += "Eysines"
console.log(name1)

let myTown = "Bordeaux"
let myArea = 33

const result2 = myTown + myArea
console.log(result2)


// Booleans

let myBoolean = true
let myBoolean2 = false

if (myBoolean) {
    console.log('ma condition est vraie')
} else {
    console.log('ma condition est fausse')
}

let MyCurrentAge = 18
let legalAgeToDrive = 18

// Comparison operators : >, >=, <, <=, ==, === (triple égal teste le type de variable)

/*if (MyCurrentAge == legalAgeToDrive) {
    console.log("Tu as le droit de conduire")
} else {
    console.log("Tu n'as pas le droit de conduire")
}*/

if (MyCurrentAge > legalAgeToDrive) {
    console.log("Tu as le droit de conduire")
} else if (MyCurrentAge < legalAgeToDrive) {
    console.log("Tu n'as pas le droit de conduire")
} else if (MyCurrentAge === legalAgeToDrive) {
    console.log("Tu as tout juste le droit de conduire")
} else {
    console.log("Dernière condition")
}

let age1 = 12
let age2 = 23
let age3 = 30
let age4 = 70

// Ecrire 4 conditions chainées pour afficher les résultats suivants :
// "Tu as 10 ans ou moins"
// "Tu as entre 11 et 30 ans"
// "Tu as entre 31 et 50 ans"
// "Tu as plus de 50 ans"

if (age4 <= 10) {
    console.log("Tu as 10 ans ou moins")
} else if (age4 <= 30) {
    console.log("Tu as entre 11 et 30 ans")
} else if (age4 <= 50) {
    console.log("Tu as entre 31 et 50 ans")
} else {
    console.log("Tu as plus de 50 ans")
}


// Variable complexe : les Objets
const myIdentity = {
    firstname : "Sokuntheavy",
    lastname : "Roeung",
    age : 36,
    town : "Eysines"
}

console.log(myIdentity.firstname)


// Exo
const fullNameFromIdentity = `${myIdentity.firstname} ${myIdentity.lastname}`

console.log(fullNameFromIdentity)

// Exo : écrire la phrase à partir de l'objet myIdentity "Bonjour, je m'appelle ..., j'ai ... ans, et j'habite ..."
//const myIntroduction = "Bonjour, je m'appelle " myIdentity.firstname + " " + myIdentity.lastname ", j'ai " myIdentity.age "ans, et j'habite " myIdentity.town

console.log(`Bonjour, je m'appelle ${myIdentity.firstname} ${myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite ${myIdentity.town}.`)


// Difficulté supplémentaire :
// Ajoute une variable "adulte"
// Ajoute un test, si l'age est inférieur à 18, change la variable en "enfant"
// Concatène cette variable à la fin de la phrase avec un "et je suis un..."

let myIntro = `Bonjour, je m'appelle ${myIdentity.firstname} ${myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite ${myIdentity.town}`

let adult = "adulte"

if (myIdentity.age < 18) {
    adult = "enfant"
}

myIntro += ` et je suis une ${adult}`

console.log(myIntro)


const person1 = {
    firstname : "Steph",
    lastname : "Roeung",
    age : 34,
    town : "Bassin"
}

const person2 = {
    firstname : "Pynaa",
    lastname : "Roeung",
    age : 32,
    town : "Bordeaux"
}

const person3 = {
    firstname : "Mel",
    lastname : "Chhoeun",
    age : 15,
    town : "Angouleme"
}

const person4 = {
    firstname : "Cla",
    lastname : "Chhoeun",
    age : 18,
    town : "Toulouse"
}

// écrire le test pour savoir si la personne habite à Bordeaux
let personToTest = person4

/*if (personToTest.town == "Bordeaux") {
    console.log(`${personToTest.firstname} habite à Bordeaux`)
} else {
    console.log(`${personToTest.firstname} n'habite pas à Bordeaux`)
}*/

// écrire le test pour savoir si la personne est un mineur qui habite à Bordeaux +> &&
/*if (personToTest.age < 18 && personToTest.town === "Bordeaux") {
    console.log(`${personToTest.firstname} est mineure et habite à Bordeaux`)
} else {
    console.log(`${personToTest.firstname} n'est pas mineure ou n'habite pas à Bordeaux`)
}*/

// écrire le test pour savoir si la personne habite à Bordeaux ou Bassin => ||
if (personToTest.town === "Bordeaux" || personToTest.town === "Bassin" || personToTest.town === "Toulouse") {
    console.log(`${personToTest.firstname} habite à Bordeaux ou Bassin ou Toulouse`)
} else {
    console.log(`${personToTest.firstname} habite ailleurs`)
}


// Arrays (= tableaux)
let myArray = ["Sara", "Alice", "Antoine", "Stéphane"]

let fName = myArray[0]

console.log(fName)

// "Sara, Alice et Stéphane sont partis."

console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis.`)


let myArrayOfObjects = [
    {name: "Sara", gender: "f"},
    {name: "Alice", gender: "f"},
    {name: "Antoine", gender: "m"},
    {name: "Stéphane", gender: "m"},
]

let objectToTest = myArrayOfObjects[0]
let gone = "parti"

if(objectToTest.gender === "f"){
    gone += "e"
}

console.log(`${objectToTest.name} est ${gone} !`)

