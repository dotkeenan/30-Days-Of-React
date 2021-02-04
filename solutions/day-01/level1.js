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
