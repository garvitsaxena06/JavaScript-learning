//accessing nested objects
var myObj = {
    'car' : {
        'inside' : {
            'glove box' : 'maps',
            'passenger seat' : 'circular',
        },
        'outside' : {
            'trunk' : 'jack'
        }
    }
};

console.log(myObj.car.inside['glove box']);
console.log(myObj);
