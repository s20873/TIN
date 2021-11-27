class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }
}

class Student extends Person{
    constructor(name, surname, id, grades = [0]){
        super(name, surname);
        this.id = id;
        this.grades = grades;
    }

    get averageGrade(){
        return this.calcAverage();
    }

    calcAverage() {
        var avg = 0;
        this.grades.forEach(element => {
            avg += element;
        });
        return avg / this.grades.length;
    }
}

var newStudent = new Student("Alisa", "Kotiun", 234, [5, 5, 5, 5, 4]);
newStudent.fullName = "Someone Else";
console.log(newStudent.fullName);
console.log(newStudent.averageGrade);