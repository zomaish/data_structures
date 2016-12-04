const input = "one two three four five six seven";
const re = /\S+(\s\S+)?(\s\S+)?/g;
console.log( input.match(re));