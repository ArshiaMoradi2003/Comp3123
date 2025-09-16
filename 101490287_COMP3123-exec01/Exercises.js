// Capitalize exercise
function capitalizeWords(str){
    return str.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log((capitalizeWords("the quick brown fox")));


// Largest Integer exercise
function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(3, 10, 4));
console.log(max(-200, -1, -20));
console.log(max(1000, 510, 440));


// Move last 3 characters to the start Exercise

function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, str.length - 3);
}

console.log(right("Arshia"));
console.log(right("FullStack"));
console.log(right("Development"));

// Find type of angle Exercise

function angle_Type(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}

console.log(angle_Type(80));
console.log(angle_Type(150));
console.log(angle_Type(90));
console.log(angle_Type(180));
