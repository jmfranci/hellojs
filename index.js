function greet(name){
    return "Boa tarde " + name;
}

function sum(a,b){

    // This are some comments that are supposed to go to the dev branch first
    return a + b;
}

console.log(greet("Ladislau Ebo"));

module.exports.sum = sum;
module.exports.greet = greet;