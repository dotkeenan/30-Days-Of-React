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
