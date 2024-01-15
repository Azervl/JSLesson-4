// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let fruit = (fruits.push("lemon") )
// console.log(fruit)


// let fLen = fruits.length;
// for( let i = 0 ; i < 4 ; i++){
     
// }
// console.log(fruits[i])






//           TASK 2         //    

const word  = prompt("Sözü daxil edin")
const letter = prompt("Hərfi daxil edin")
function searchLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        return "Hərf var";
      }
    }
    return "Hərf yoxdur";
  }
  
  console.log(searchLetter(word, letter));






// const word  = prompt("Sözü daxil edin")
// let arr =[]
// const reverseToString = (str) =>{
//     for(let i = 0; i< word.length; i++){
//         console.log(str[i]);
//     }
//     console.log(arr.reverse().join(""))
// }
// reverseToString()