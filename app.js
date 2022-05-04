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
//         } else
//         fizzArray.push(i)
//     }
//     console.log(fizzArray);
// }

// for(let i=1; i<101;) {
//     console.log(
//         (++i % 3 ? '' : "fizz") + (++i % 5 ? '' : 'buzz') || i
//     )
// }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// let array = [8,45,3,22,55,98,45,34,23,12,45,34,56,67,89,99,33,22,11,55,667,4,3,7,8,9,123,456,345,789,567,543,900,613,286,777,563,21,32,43,54,65,678,56,475,634,254,]

// function sortNums(arr) {
//     arr.sort((a, b) => b - a)
//     console.log(arr);
// }
// sortNums(array)

// a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,x,z

// 2,7,9,14,15

// ========================================================================

"Create a function batches that returns the maximum number of whole batches that can be cooked from a recipe"

// "It accepts two objects as arguments: the first object is the recipe
// for the food, while the second object is the available ingredients.
// Each ingredient's value is a number representing how many units there are."

"batches(recipe, available)"

const required = {
    milk: 100,
    butter: 50, 
    flour: 5 
}
const available = {
    milk: 3320,
    butter: 3000, 
    flour: 810 
}

// const batches = (obj1, obj2) => {
//     JSON.stringify(obj1) > JSON.stringify(obj2) ? console.log('true') : console.log('false');
// }

const batchQty = (obj1, obj2) => {
   console.log( Math.floor(
        Math.min(...Object.keys(obj1).map(k => obj2[k] / obj1[k] || 0))
    ))
}

batchQty(required, available)

// const deepEqual = (obj1, obj2) => {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if(keys1.length !== keys2.length) {
//         return false
//     }

//     for(const key of keys1) {
//         const val1 = obj1[key];
//         const val2 = obj2[key];
//         const areObjects = isObject(val1) && isObject(val2);
//         if(
//             areObjects && !deepEqual(val1, val2) ||
//             !areObjects && val1 !== val2
//         ) {
//             console.log("false");;
//         }
//     }
//     console.log("true");
// }

// const isObject = (object) => {
//     return object !== null && typeof object === 'object';
// }

// deepEqual(required, available)