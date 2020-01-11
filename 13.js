//precedence of local and global variables
var name = "John";
function myFunky() {
    var name = "James";
    return name;
}

console.log(myFunky());         //call for local variable
console.log(name);              //call for global variable
