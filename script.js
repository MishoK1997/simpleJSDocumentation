
const filter_list = list =>  list.filter(el=> Number.isInteger(el))
const secondFilter_list = list => list.filter(el=> typeof el === 'number')


console.log("checking================================")

console.log(filter_list([1,2,"22","string",100]))

console.log(filter_list([1,2,'aasf','1','123',123]))


const items = ["key", "toy", "notebook", "car"];

console.log(items.slice(-3,-1))

console.log("Another block ------------------------------")

const rangeArr = ( start,end) =>  Array(end - start +1)
.fill(start).map((el,ind)=>el+ind)


console.log(rangeArr(10,20))


const myStrNum = "This is num 2 300 ss"

const parsedVal = Number.parseFloat(myStrNum)

console.log(parsedVal)

const newStr = "This is a string";

console.log(newStr.charAt(2))


let fruits = "apple,banana,grape,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray);


const reducedVal = [2,3,4,5,6].reduce((total, currVal)=> total+currVal, 0);
console.log(reducedVal)


const someVal = ["a", "b", "c", "A", "d"].some(letter => letter == letter.toUpperCase());

console.log(someVal)

console.log("Say Hello to JS".indexOf("JS",0))


console.log("Mama world".includes("world", 6))

/**
 * Repetiiton secton above -------------------------------
 */