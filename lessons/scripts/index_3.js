
// conditions imbriquées

// if () {
//     if () {
//     }
// }

// array.length, index


// let obj = {}
// let arr = ["Dan", "Sami", "Karim", "Calude"]
// let result = ""

// écrire la chaîne de caractères "Dan, Sami, Karim et Claude assistent au cours de JavaScript."

/* for (let index = 0; index < arr.length; index++) {
    if (index === arr.length - 1) {
        result += arr[index] + " "
    } else if (index === arr.length - 2) {
        result += arr[index] + " et "
    } else {
        result += arr[index] + ", "
    }
}

result += "assistent au cours de JavaScript."

// console.log(result)

let numbers = [3, 1, 21, 13, 15, 8, 7]
let total = 0

// A l'aide d'un parcours de tableau, calculer la somme totale du tableau

for (let ind = 0; ind < numbers.length; ind++) {
    total += numbers[ind]
}

// console.log(total)

// A l'aide d'un parcours de tableau, calculer la somme de la prenière moitié du tableau, et la somme de la seconde moitié du tableau

let total_1 = 0
let total_2 = 0

for(let i = 0; i< numbers.length; i++) {
    if (i < numbers.length / 2) {
        total_1 += numbers[i]
    } else if (i >= 3) {
        total_2 += numbers[i]
    }
}

console.log(total_1, total_2) */

/*
let people = [
    {
        name: "Jean",
        age: 28,
        hasCar: false
    },
    {
        name: "Daniel",
        age: 17,
        hasCar: false
    },
    {
        name: "Mathilde",
        age: 21,
        hasCar: true
    },
    {
        name: "Oscar",
        age: 12,
        hasCar: false
    },
    {
        name: "Adèle",
        age: 43,
        hasCar: true
    },
    {
        name: "Romane",
        age: 61,
        hasCar: false
    },
    {
        name: "Amandine",
        age: 8,
        hasCar: false
    },
    {
        name: "Johanna",
        age: 25,
        hasCar: true
    },
]
*/
// Calculer la moyenne des âges de people (le total divisé par le nombre d'éléments)
// let totalAgePeople = 0

/* for(let i = 0; i < people.length; i++) {
    totalAgePeople += people[i].age
} */

// Difficulté supplémentaire, afficher la moyenne avec 1 chiffre après la virgule, en utilisant la méthode Math.round()

// let ageAverage = totalAgePeople / people.length
// ageAverage = Math.round(ageAverage * 10) / 10

// console.log(ageAverage)

// Afficher le nombre de personnes qui ont une voiture
// Afficher une phrase "Un tel, un tel, un tel et un tel ont une voiture."

/* let nbPeopleWithCar = 0

for (let i = 0; i < people.length; i++) {
    if (people[i].hasCar) nbPeopleWithCar++
}

console.log(nbPeopleWithCar) */

/* let peopleWithCar = []

for (let i = 0; i < people.length; i++) {
    if (people[i].hasCar) {
        peopleWithCar.push(people[i])
    }
}

console.log(peopleWithCar) */


// LES FONCTIONS

// déclaration d'une fonction
/*
function logName(parameter) {
    console.log("Bonjour " + parameter + " Vous avez gagné notre grand prix, appelez au 0033...")
}

// exécution d'une fonction
logName("Paul")
logName("Pierre")
logName("Simon")

function add(param1, param2) {
    console.log(param1 + param2)
}

/*
add(3, 4)
add(200, 41)
add(21, 7)
*/

/*
function addWithReturn(p1, p2) {
    return p1 + p2
}

let resultAddition = addWithReturn(5, 6)

let names_1 = ["Paul", "Pierre", "Simon"]
let names_2 = ["Mathilde", "Adèle", "Romane"]
let names_3 = ["Dann", "Sami", "Karim"]

function getAllNamesInSentence(arrParameter) {
    let sentence = ""

    for(let i = 0; i < arrParameter.length; i++) {
        sentence += arrParameter[i]
        if(i !== arrParameter.length - 1) {
            sentence += ", "
        }
    }

    return sentence
}

let resultSentence = getAllNamesInSentence(names_1)
let resultSentence2 = getAllNamesInSentence(names_2)
let resultSentence3 = getAllNamesInSentence(names_3)

console.log(resultSentence);
console.log(resultSentence2);
console.log(resultSentence3);

console.log(resultSentence);
*/

/* let towns = ["Bordeaux", "Talence", "Pessac", "Mérignac"]
let sentence = ""

// Ecrire une fonction qui prend en paramètre un tableau et qui retourne la phrase 'Bordeaux - Talence - Pessac - Mérignac'


const townsSentence = getTownsSentence(towns)
console.log(townsSentence)


function getTownsSentence(arr) {
    let sentence = ""

    for(let i = 0; i < arr.length; i++) {
        sentence += arr[i]
        if (i !== arr.length - 1) {
            sentence += " - "
        }

        return sentence
    }
}


let resultFromArrayOfObjects = getNamesInSentence(people)
console.log(resultFromArrayOfObjects)

// 'Jean - Mathilde - Adèle ...'
function getNamesInSentence(arr) {
    let result = ""

    for (let i = 0; i < arr.length; i++) {
        result += arr[i].name 
        if(i !== arr.length - 1) result += " - "
    }

    return result
} */

// Exercice++
// La fonction retourne un tableau des noms des personnes qui n'ont pas de voiture

/*
let myArrayOfObjects = [
    {name: "Sara", gender: "f"},
    {name: "Alice", gender: "f"},
    {name: "Antoine", gender: "m"},
    {name: "Stéphane", gender: "m"},
]

// Ecrire une fonction qui affiche en console la phrase correcte pour chaque élément du tableau

for(let i = 0; i < myArrayOfObjects.length; i++) {
    logCorrectSentence(myArrayOfObjects[i])
}

function logCorrectSentence(element) {
    let gone = "parti"

    if(element.gender === "f") {
        gone += 'e'
    }
    console.log(`${element.name} est ${gone} !`)
}
*/

// Exercice : trouver le minimum
let numbers_a = [34, 12, 31, 5, 54, 6]
let numbers_b = [32, 2, 45, 23, 21, 1]

/*
let minimum_a = numbers_a[0]

for (let i = 0; i < numbers_a.length; i++) {
    if (numbers_a[i] < minimum_a) {
        minimum_a = numbers_a[i]
    }
}

console.log(minimum_a)

let minimum_b = numbers_a[0]

for (let i = 0; i < numbers_b.length; i++) {
    if (numbers_b[i] < minimum_b) {
        minimum_b = numbers_b[i]
    }
}

console.log(minimum_b)
*/

// Exercice : factoriser le script avec une fonction getMinimum() qui retourne la valeur minimum d'un tableau

function getMinimum(arrNumbers) {
    let resultMinimum = arrNumbers[0]

    for (let i = 1; i < arrNumbers.length; i++) {
        if (arrNumbers[i] < resultMinimum) {
            resultMinimum = arrNumbers[i]
        }
    }

    return resultMinimum
}


