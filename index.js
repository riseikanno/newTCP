let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [1,2,3,4,5,6,7,8,9,10];
let youpt = 0;
let com1pt = 0;
let com2pt = 0;
let cnt = 0;
let i = 0;
let ii = 0;
let used = [];

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let com1_array = shuffle(array1);
let com2_array = shuffle(array2);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    enternumber();
})


function enternumber() {
    let input = document.getElementById("input");
    input = Number(input.value);

    if (cnt === 10 && i < 50) {
        guessnumber1(input);
    } else if(cnt ===10 && i > 50) {
        guessnumber2(input);
    } else {
        turn(input, used);
    used.push(input);
    }
}

        
function turn(input, used) {
    let com1 = 0;
    let com2 = 0;
    com1 = com1_array[cnt];
    com2 = com2_array[cnt];

    console.log(cnt);
    console.log(input);
    console.log(com1);
    console.log(com2);

    if(used.includes(input) === true) {
        form.insertAdjacentHTML("afterend", "<p>同じ数字は複数回使えない</p>");
    } else if(input > com1 && com1 > com2) {
        form.insertAdjacentHTML("afterend", `<p>勝者：you<br>差：${input-com2}<br>クラッシュなし</p>`);
        youpt++;
        cnt++;
    } else if(input > com2 && com2 > com1) {
        form.insertAdjacentHTML("afterend", `<p>勝者：you<br>差：${input-com1}<br>クラッシュなし</p>`);
        youpt++;
        cnt++;
    } else if(input != com1 && com1 === com2) {
        form.insertAdjacentHTML("afterend", `<p>勝者：you<br>差：${Math.max(input, com1) - Math.min(input, com1)}<br>クラッシュあり</p>`);
        youpt++;
        cnt++;
    } else if(com1 > input && input > com2) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com1<br>差：${com1-com2}<br>クラッシュなし</p>`);
        com1pt++;
        cnt++;
    } else if(com1 > com2 && com2 > input) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com1<br>差：${com1-input}<br>クラッシュなし</p>`);
        com1pt++;
        cnt++;
    } else if(com1 != input && input === com2) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com1<br>差：${Math.max(com1, input) - Math.min(com1, input)}<br>クラッシュあり</p>`);
        com1pt++;
        cnt++;
    } else if(com2 > input && input > com1) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com2<br>差：${com2-com1}<br>クラッシュなし</p>`);
        com2pt++;
        cnt++;
    } else if(com2 > com1 && com1 > input) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com2<br>差：${com2-input}<br>クラッシュなし</p>`);
        com2pt++;
        cnt++;
    } else if(com2 != com1 && com1 === input) {
        form.insertAdjacentHTML("afterend", `<p>勝者：com2<br>差：${Math.max(com2, com1) - Math.min(com2, com1)}<br>クラッシュあり</p>`);
        com2pt++;
        cnt++;
    } else {
        form.insertAdjacentHTML("afterend", "<p>勝者：なし<br>差：0<br>triple crash!!</p>");
        cnt++;
    }

    console.log(cnt);
    form.insertAdjacentHTML("afterend", `<p>得点状況<br>you：${youpt}<br>com1：${com1pt}<br>com2：${com2pt}</p>`);
    form.insertAdjacentHTML("afterend", `<p id="turn">第${cnt}ターン</p>`);

    if(cnt === 10) {
        form.insertAdjacentHTML("afterend", "<p>com1の第1ターンの数字を入力</p>");
    }
}


function guessnumber1(input) {
    let com1 = 0;
    com1 = com1_array[i];
    
    if(input === com1) {
        if(i === 9) {
            form.insertAdjacentHTML("afterend", "<p>正解！<br>すべて当てたのでプラス1pt<br>com2の第1ターンの数字を入力</p>");
            youpt++
            i += 100
        } else {
            form.insertAdjacentHTML("afterend", `<p>正解！<br>com1の第${i + 2}ターンの数字を入力</p>`);
            i++;
        }    
    } else {
        form.insertAdjacentHTML("afterend", "<p>不正解！<br>com2の第1ターンの数字を入力</p>");
        i += 100
    }


}


function guessnumber2(input) {
    let com2 = 0;
    com2 = com2_array[ii];

        if(input === com2) {
            if(i === 9) {
                form.insertAdjacentHTML("afterend", "<p>正解！<br>すべて当てたのでプラス1pt</p>");
                youpt++
                finalresult();
            } else {
                form.insertAdjacentHTML("afterend", `<p>正解！<br>com2の第${ii + 2}ターンの数字を入力</p>`);
                ii++
            }
        } else {
            form.insertAdjacentHTML("afterend", "<p>不正解！</p>");
            finalresult();
        }
}


function finalresult() {
    form.insertAdjacentHTML("afterend", `<p id="result">最終結果<br>you：${youpt}<br>com1：${com1pt}<br>com2：${com2pt}</p>`);

    if(youpt > Math.max(com1pt, com2pt)) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：you</p>`);
    } else if(com1pt > Math.max(youpt, com2pt)) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：com1</p>`);
    } else if(com2pt > Math.max(youpt, com1pt)) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：com2</p>`);
    } else if(youpt === com1pt && youpt > com2pt) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：you&com1</p>`);
    } else if(youpt === com2pt && youpt > com1pt) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：you&com2</p>`);
    } else if(com1pt === com2pt && com1pt > youpt) {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：com1&com2</p>`);
    } else {
        form.insertAdjacentHTML("afterend", `<p id="result">勝者：nobody</p>`);
    }
}