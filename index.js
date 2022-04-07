// const form = document.getElementById("form");
// const input1 = document.getElementById("input");
// const input = Number(input1.value);
// const ul = document.getElementById("ul");

// console.log(input)

const arrayyou = [1,2,3,4,5,6,7,8,9,10]
const array1 = [1,2,3,4,5,6,7,8,9,10]
const array2 = [1,2,3,4,5,6,7,8,9,10]

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const com1 = shuffle(array1)
const com2 = shuffle(array2)

let youpt = 0
let com1pt = 0
let com2pt = 0


form.addEventListener("submit", function(event) {
    event.preventDefault();
    enternumber();
})

function recieveInput(){
    //input recieve
    return input_value;
}

function func1(){
    let number = recieveInput();
}


function enternumber() {
    let input = document.getElementById("input");
    input = Number(input.value);
    console.log(input)
    for (let i = 0; i < 10; i++) {
        if(input > i) {
            console.log("win!");
        } else if(input < i){
            console.log("lose..");
        } else {
            console.log("crash!!w");
        }
        //if (arrayyou.includes(input) === true) {
        //    console.log("同じ数字は複数回使えない");
        // }　else {
            // console.log(`${com1[i]} と ${com2[i]} `);
        //    console.log(i);
        //}
    }
    
}


