function greet(name){
    return "Hello from Javascript " + name;
}

function sum(a,b){
    a = a - 1;
    a = a + 1;
    return a + b;
}

console.log(greet("Francisco Santos"));

module.exports.sum = sum;
module.exports.greet = greet;