


let getTriangle = document.querySelector("#symbol")
let positonTriangle = 0
let positionTriangleArray = []
console.log(positionTriangleArray)


let score = 0 

/* question1 */
let button1 = document.getElementById("button-answer-left1")
button1.addEventListener("click", answerQuestion1)


function answerQuestion1() {
    console.log("called")
let getDiv1 = document.getElementById("answer-for-left-window1") 
button1.style.borderWidth = "0.4vw"
if (getDiv1.style.display === 'none') {
    getDiv1.style.display = 'inherit';
    button2.removeEventListener("click", answerQuestion2)
    button1.removeEventListener("click", answerQuestion1)
} else {
    getDiv1.style.display = 'none'; 
}
}



let button2 = document.getElementById("button-answer-right1")
button2.addEventListener("click", answerQuestion2)


function answerQuestion2() {
    console.log("called")
let getDiv2 = document.getElementById("answer-for-right-window1")
button2.style.borderWidth = "0.4vw"

if (getDiv2.style.display === 'none') {
    getDiv2.style.display = 'inherit';
    button1.removeEventListener("click", answerQuestion1)
    button2.removeEventListener("click", answerQuestion2)
    score += 150
    document.querySelector("#score span").innerText = score
    positionTriangleArray = [positonTriangle += 12 , '%' ] 
    getTriangle.style.top = positionTriangleArray.join("")
    
} else {
    getDiv2.style.display = 'none'; 
}
}



/* question 2 */

let button3 = document.getElementById("button-answer-left2")
button3.addEventListener("click", answerQuestion3)


function answerQuestion3() {
    console.log("called")
let getDiv3 = document.getElementById("answer-for-left-window2")
button3.style.borderWidth = "0.4vw"

if (getDiv3.style.display === 'none') {
    getDiv3.style.display = 'inherit';
    button3.removeEventListener("click", answerQuestion3)
    button4.removeEventListener("click", answerQuestion4)
} else {
    getDiv3.style.display = 'none'; 
}
}


let button4 = document.getElementById("button-answer-right2")
button4.addEventListener("click", answerQuestion4)


function answerQuestion4() {
    console.log("called")
let getDiv4 = document.getElementById("answer-for-right-window2")
button4.style.borderWidth = "0.4vw"
if (getDiv4.style.display === 'none') {
    getDiv4.style.display = 'inherit';
    button3.removeEventListener("click", answerQuestion3)
    button4.removeEventListener("click", answerQuestion4)
    score += 150
    document.querySelector("#score span").innerText = score
    positionTriangleArray = [positonTriangle += 10 , '%' ] 
    getTriangle.style.top = positionTriangleArray.join("")
} else {
    getDiv4.style.display = 'none'; 
}
}

/* question 3 */

let button5 = document.getElementById("button-answer-left3")
button5.addEventListener("click", answerQuestion5)


function answerQuestion5() {
    console.log("called")
let getDiv5 = document.getElementById("answer-for-left-window3")
button5.style.borderWidth = "0.4vw"

if (getDiv5.style.display === 'none') {
    getDiv5.style.display = 'inherit';
    button6.removeEventListener("click", answerQuestion6)
    button5.removeEventListener("click", answerQuestion5)
    score += 150
    document.querySelector("#score span").innerText = score
    positionTriangleArray = [positonTriangle += 10 , '%' ] 
    getTriangle.style.top = positionTriangleArray.join("")
} else {
    getDiv5.style.display = 'none'; 
}
}


let button6 = document.getElementById("button-answer-right3")
button6.addEventListener("click", answerQuestion6)


function answerQuestion6() {
    console.log("called")
let getDiv6 = document.getElementById("answer-for-right-window3")
button6.style.borderWidth = "0.4vw"
if (getDiv6.style.display === 'none') {
    getDiv6.style.display = 'inherit';
    button5.removeEventListener("click", answerQuestion5)
    button6.removeEventListener("click", answerQuestion6)
} else {
    getDiv6.style.display = 'none'; 
}
}

