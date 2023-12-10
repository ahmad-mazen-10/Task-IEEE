// Write a function that takes a number and returns the reverse of that number. (note remove any additional zeros).
// Example1:
//      input: 123456789
//      output: 987654321
// Example2:
//      input: 45610200
//      output: 201654



//solution :
// 1 -- create funtion recieve number
// 2 -- convert the number to string with toString() => convert to array with split() and reverse with reverse() ;
// 3 -- check the start num == 0 if true => remove it;
// 4 -- convert string to new-number
// 5 -- return new-number;



function rev(number){
    let str = number.toString().split('').reverse();
    if(str[0] == 0) str.shift();

    let newNum = parseInt(str.join(''));
    return newNum;
}

console.log(rev(123456789))
console.log(rev(45610200))

