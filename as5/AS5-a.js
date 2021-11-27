var properties = function(object){
    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${typeof(value)}`);
      }
};

var Dog = {
    name: "John",
    dateOfBirth: 2014,
    hasOwner: false,
    sound: function(){
        console.log("bark-bark");
    },
    age: function(){
        var currentYear = new Date().getFullYear();
        console.log(currentYear-this.dateOfBirth);
    }
};

console.log(properties(Dog));


