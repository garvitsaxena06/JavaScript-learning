//check whether a property is present or not
var myObj = {
    'property1' : 'key1',
    'property2' : 'key2',
    'property3' : 'key3'
};

function checkProperty(check) {
    if(myObj[check]) {
        return myObj[check];
    }
    else {
        return 'Not Found';
    }
}

console.log(checkProperty('property1'));
