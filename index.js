function greet(name){
    return "Boa tarde " + name;
}

function sum(a,b){
    
    return a + b;
}

console.log(greet("Ladislau Ebo"));

module.exports.sum = sum;
module.exports.greet = greet;