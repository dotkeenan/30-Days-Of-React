// ##### Exercises: Level 3

// 3. Call your function _shuffleArray_, it takes an array as a parameter and
// it returns a shuffled array
const shuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let randomNum = Math.floor(Math.random() * array.length);
    let tempStorage = array[i];
    array[i] = array[randomNum];
    array[randomNum] = tempStorage;
  }
  return array;
}

// 4. Call your function _factorial_, it takes a whole number as a parameter and
// it return a factorial of the number
const factorial = (n) => {
  let result = 1
  while (n > 1) {
    result *= (n - 1)
    n--
  }
  return result;
}

const average = (arr) => {
  return arr.reduce((acc, cur) => acc + cur) / arr.length
}
/* 9. Higher Order Function */

/* interesting destructuring example */
const [x, y] = [2, (value) => value ** 2]
/*
x // 2
y // function(value) {return value **2}
y(x) // 4
*/

/* destructuring nested objects */
const props = {
  user: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250
  },
  post: {
    title: 'Destructuring and Spread',
    subtitle: 'ES6',
    year: 2020
  },
  skills: ['JS', 'React', 'Redux', 'Node', 'Python']

}
}

/* Multi step */
const { user, post, skills } = props
const { firstName, lastName, age } = user
const { title, subtitle, year } = post
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills
/* One step */
const { user: { firstName, lastName, age },
        post: { title, subtitle, year },
        skills: [skillOne, skillTwo, skillThree, skillFour, skillFive] } = props

/* Destructuring during loop through array*/
const languages = [
  { lang: 'English', count: 91 },
  { lang: 'French', count: 45 },
  { lang: 'Arabic', count: 25 },
  { lang: 'Spanish', count: 24 },
  { lang: 'Russian', count: 9 },
  { lang: 'Portuguese', count: 9 },
  { lang: 'Dutch', count: 8 },
  { lang: 'German', count: 7 },
  { lang: 'Chinese', count: 5 },
  { lang: 'Swahili', count: 4 },
  { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
  console.log(`The ${lang} is spoken in ${count} countries.`)
}

/* Destructuring exercises */

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

// how to destructure an object with nested arrays
const {
  firstName,
  lastName,
  age,
  country,
  job,
  skills: [html, css, javascript, react, redux, node, mongodb, python, d3],
  languages: [ahmaric, english, suomi]} = person

const getPersonInfo = (object) => {
  return console.log(`${firstName} ${lastName} lives in ${country}.
    He is ${age}.  He is an ${job}. He teaches ${html}, ${css}, ${javascript},
    ${react}, ${redux}, ${node}, ${mongodb}, ${python}, and ${d3}.
    He speaks ${ahmaric}, ${english}, and ${suomi}.`)
}
/*
getPersonInfo(person) // Asabeneh Yetayeh lives in Finland.  He is 250.
He is an Instructor and Developer. He teaches HTML, CSS, JavaScript React,
Redux, Node, MongoDB, Python, and D3.js.  He speaks Amharic, English, and Suomi(Finnish).
*/

/* Higher order functions exercises */
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Print the price of each product using forEach
const printPrice = (products) => {
  products.forEach(product => console.log(product.price))
}

// Print the product items as follows using forEach
const printProduct = (products) => {
  products.forEach(product => {
    return console.log(`The price of ${product.product} is ${product.price} euros.`)
  })
}
printProduct(products)

// Calculate the sum of all the prices using forEach
const priceSum = (products) => {
  let sum = 0;
  products.forEach(product => sum += Number(product.price));
  return sum;
}
console.log(priceSum(products))

// Create an array of prices using map and store it in a variable prices
const priceArray = (product) => {
  var prices = product.map(product => product.price)
  return prices
}
console.log(priceArray(products))

// Filter products with prices
const productsWithPrice = (p) => {
  return p.filter(product => typeof product.price === 'number')
}
console.log(productsWithPrice(products))

// Use method chaining to get the sum of the prices(map, filter, reduce)
const sumOfPrices = (p) => {
  return (
    p.filter(product => typeof product.price === 'number')
    .map(product => product.price)
    .reduce((acc, cur) => acc + cur)
  )
}
console.log(sumOfPrices(products))

// Calculate the sum of all the prices using reduce only
/* you set the optional initial value as an argument of reduce(), not the callback like (acc, cur) */
const sumReduce = (p) => {
  return p.reduce((acc, cur) => acc + Number(cur.price), 0)
}
console.log(sumReduce(products))

// Find the first product which doesn't have a price value
const findFirstWithNoPrice = (p) => {
  return p.find(product => typeof product.price !== 'number')
}
console.log(findFirstWithNoPrice(products))

// Check if some products do not have a price value
const checkNoPrice = (p) => {
  return p.some(product => typeof product.price !== 'number')
}
console.log(checkNoPrice(products))

// Check if all the products have price value
const checkSomePrice = (p) => {
  return p.every(product => typeof product === 'number')
}
console.log(checkSomePrice(products))

/*
Explain the difference between forEach, map, filter and reduce
forEach iterates over each element in an array and performs a callback on each element.
map is similar to forEach but directly mutates the array it is called on, and returns it after mutating it.
filter takes a callback and returns all array elements that satisfy the callback you provide.
reduce is used to combine all array elements in an 'accumulating' fashion.

Explain the difference between filter, find and findIndex
filter takes a callback and returns an array filled with ALL elements that satisfied the value/callbacks conditions.
find returns the FIRST element that satisfies the value/callback's conditions.
findIndex returns the index value of the element that satisfies the callback/value

Explain the difference between some and every
both return a boolean.
some checks if atleast '1' element satisfies the callback's condition
every checks if ALL elements satisfy the callback's condition.

*/

/* Classes Exercises */
// Create an Animal class.The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }
  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  set setColor(color) {
    this.color = color;
  }
  set setLegs(legs) {
    this.legs = legs;
  }

  whoAmI() {
    return `My name is ${this.name} and I am ${this.age} years old.  My fur/skin is ${this.color} and I have ${this.legs} legs.`
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, species) {
    super(name, age, color, legs)
    this.species = species;
  }
  whoAmI() {
    return `My name is ${this.name} and I am a ${this.age} year(s) old ${this.species}.  My fur/skin is ${this.color} and I have ${this.legs} legs.`
  }
}

const animal1 = new Animal('Rex', 9, 'green', 0)
const dog1 = new Dog('Michu', 2, 'black', 4, 'Dog')
animal1.setLegs = 3
console.log(animal1)
console.log(dog1)
console.log(animal1.whoAmI())
console.log(dog1.whoAmI())


/* Let's try to develop a program which calculate measure of central tendency
of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
In addition to those measures find the min, max, count, percentile, and
frequency distribution of the sample. You can create a class called Statistics
and create all the functions which do statistical calculations as method for
the Statistics class. Check the output below. */
var ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
  constructor(ages) {
    this.ages = ages;
  }
  count() {
    return this.ages.length
  }
  sum() {
    return this.ages.reduce((acc, cur) => acc + cur)
  }
  min() {
    return this.ages.sort((a,b) => a - b)[0]
  }
  max() {
    return this.ages.sort((a,b) => b - a)[0]
  }
  range() {
    let rangeArr = this.ages.sort((a,b) => a - b)
    return rangeArr[this.ages.length-1] - rangeArr[0]
  }
  mean() {
    return (this.ages.reduce((acc, cur) => acc + cur)) / this.ages.length
  }
}

var stats = new Statistics(ages)
console.log(stats.sum())
console.log(stats.min())
console.log(stats.max())
console.log(stats.range())
console.log(stats.mean())
