# Importing and exporting modules (`require()`) lab

Your task in this lab is to create a program that can pick a random student's name
from our class while using the `require()` function.

1. Create a new npm project with `npm init`

1. Install the `random-int` package, and read the documentation about [its interface](https://www.npmjs.com/package/random-int)

1. Create an `index.js` file

1. Create a file `students.js` that exports an array of the students names in our class

1. Create a file `random-student.js` that exports a function `randomStudent()`. `randomStudent()`
 should:
    - use the array from `students.js`
    - pick a random student out of the array
    - return the student's name

1. Create a file `main.js` that uses `randomStudent()` to log a random student's name to the console.
