//if-else statements
function check(value) {
    if(value < 5) {
        return "tiny";
    }
    else if(value < 10) {
        return "small" ;
    }
    else if(value < 15) {
        return "medium" ;
    }
    else if(value < 20) {
        return "large" ;
    }
    else {
        return "huge" ;
    }
}

console.log(check(25));
