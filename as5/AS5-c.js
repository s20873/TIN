function Student(name, surname, id) {
    this.name = name;
    this.surname = surname;
    this.id = id;
}
Student.prototype.courses = ["TPO", "WF", "GUI"];

var s1 = new Student("Alisa", "Kotiun", 123);
console.log(s1.courses);
console.log(s1);