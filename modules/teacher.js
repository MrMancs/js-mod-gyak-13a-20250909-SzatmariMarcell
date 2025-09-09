import Person from "./person";
import Student from "./student";

export default class Student extends Person {
    _students = []

    get students(){
        return [...this._students]
    }

    set students(value){
        this._students = [...value]
    }

    constructor(students) {
        this.students = students
    }
}