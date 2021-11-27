function Student(name, surname, id, grades = [0]){
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.fullName = function(){
        console.log(this.name + " " + this.surname);
    };
    this.averageGrade = function(){
        var avg = 0;
        this.grades.forEach(element => {
            avg += element;
        });
        console.log("Average grade: " + avg/this.grades.length);
    };
};

var newStudent = new Student("Alisa", "Kotiun", 234, [5,4,3,2]);
newStudent.fullName();
newStudent.averageGrade();

