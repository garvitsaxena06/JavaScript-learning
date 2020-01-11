//to create a copy of object in another
var myObj = {
    'property1' : 'key1',
    'property2' : 'key2',
    'property3' : 'key3'
};

var myVar = JSON.parse(JSON.stringify(myObj));
console.log(myVar);
