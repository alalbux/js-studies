// Valores [number, string, boolean, object, function, undefined]
//
// Alguns valores são criados digitando seu nome (true, null) ou valores (13, "abc").
// Eles podem ser combinados e transformados com operadores. Nós vimos operadores 
// binários para aritmética (+, -, *, /, e %), um para concatenação de string (+), 
// comparação (==, !=, ===, !==, <, >, <=, >=) e lógica (&&, ||), como também vários 
// operadores unários (- para negativar um número, ! para negar uma lógica, e typeof 
// para encontrar o tipo do valor).
// Números

console.log(1)
console.log(9.81)
console.log(2.998e8)
console.log(100 + 4 * 11)
console.log((100 + 4) * 11)
console.log(144 % 12)
console.log(Infinity - 1)
console.log(0 / 0)

// Strings

console.log("Patch my boat with chewing gum")
console.log('Monkeys wave goodbye')
console.log("This is the first line\nAnd this is the second")
console.log(`A newline character is written like \"\\n\".`)
console.log("con" + "cat" + "e" + "nate")

// Operadores Unários
// typeof produz uma string do tipo dado

console.log(typeof 4.5)
console.log(typeof "x")

console.log(- (10 - 2)) // ??? unarios binarios??

// Valores Booleanos

// Comparações 

console.log(3 > 2)
console.log(3 < 2)
console.log("Aardvark" < "Zoroaster")
console.log("Itchy" != "Scratchy")
console.log(NaN == NaN)

// Operadores Lógicos
console.log(true && false)
console.log(true && true)

console.log(false || true)
console.log(false || false)

console.log(1 + 1 == 2 || 10 * 10 <= 100)

// Valores Indefinidos
console.log(typeof null)
console.log(typeof undefined)
console.log(null)
console.log(undefined)

// Conversão Automática de tipo
console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
console.log(false == 0)

// && e ||
console.log(null || "user")
console.log("Karl" || "user")