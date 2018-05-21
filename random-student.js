const students = require("./students");
const randomInt = require("random-int");

const randomStudent = () => {
    const studentIndex = randomInt(students.length - 1);
    return students[studentIndex];
}

module.exports = randomStudent;