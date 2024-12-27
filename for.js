// for (let num = 0; num <=10; num++ ){
//     console.log(num)
// }

// for (let num = 1; num <= 50; num++) {
//     console.log(num)
// }

// // even number
// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i)
// }
// // odd number
// for (let i = 1; i <= 100; i = i + 2) {
//     console.log(i)
// }

// give me the number list 1 to 30 divisible by 5

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }
// total sum of the number
let total = 0
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
     total = total + i;   
    }
}

console.log("Total sum of the number", total)