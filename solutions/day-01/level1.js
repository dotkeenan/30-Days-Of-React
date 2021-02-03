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
