import Person from "./person";
import Student from "./student";
import Teacher from "./teacher";

// TODO - test classes
var testPerson = new Person({name: "Joe Test"})
var testStudent = new Student({
    name: "John Clever",
    marks: []
})
var testTeacher = new Teacher({
    name: "Bob Sinclair",
    students: [testStudent,]
})

export {Person, Student, Teacher}