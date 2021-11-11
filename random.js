//홀수 짝수 프로그래밍

//1. 컴퓨터가 임의의 숫자를 생성
//2. 컴퓨터가 화면에 ODD(홀수) & EVEN(짝수) 맞춰봐 제시
//3. 사용자가 입력
//** 만일 value 2로 나눈 나머지가 0이고, 사용자(user answer)가 EVEN 이면 정답
//** 아니면 value 2로 나눈 나머지가 1이고, 사용자가 ODD 이면 정답
//** 아니면 오답답
//4. 맞는지 틀린지 결과 표출

const prompt = require('prompt-sync')()

//const num = (Math.random() * 100 ) % 2
//const value = parseInt(num)
const num = parseInt( Math.random() * 100) %2

console.log(num)

//사용자에게 입력
const answer = prompt("ODD O? EVEN E?")

//num 값이 0 이고 answer 가 E 정답, 혹은 num 값이 1 이고 answer 가 O 정답, 나머지는 오답
//if(num === 0 && answer === E){
//    console.log("정답")
//}else if(num === 1 && answer === O){
//    console.log("정답")
//}else{
//    console.log("오답")
//}

const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"

//if(condition1 || condition2 ) {
//    console.log("정답")
//} else{
//    console.log("오답")
//}

//if(condition1 || condition2 ) {
//    console.log("정답")
//    return
//}
//console.log("오답")

const result = condition1 || condition2 ?"정답":"오답"

console.log(`최종결과는 ${result}`)