// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// function fizzBuzz() {
//     let fizzArray = [];
    
//     for(i=1; i<101; i++){
//         if(i%3 && i%5 === 0) {
//             fizzArray.push("fizzBuzz")
//         } else if(i%5 === 0) {
//             fizzArray.push("buzz")
//         } else if(i%3 === 0) {
//             fizzArray.push("fizz")
//         }
//         fizzArray.push(i)
//     }
//     console.log(fizzArray);
// }
// fizzBuzz()

for(let i=1; i<101;) {
    console.log(
        (++i % 3 ? '' : "fizz") + (++i % 5 ? '' : 'buzz') || i
    )
}
