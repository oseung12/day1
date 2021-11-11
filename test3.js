
// 1ft 당 샷시의 가격을 작성하고 가로세로를 사용자가 직접 입력하도록 바꾼후 철근의 가격 구하기.

const readline = require('readline-sync');

// 1ft 3.5
// 300 * 200
console.log("1피트당 샷시의 가격은 얼마인가요?")
//const perFeet = readline.prompt()
const perFeet = parseFloat(readline.prompt())

console.log("가로길이는 얼마인가요? cm")
const width = parseInt(readline.prompt())

console.log("세로길이는 얼마인가요? cm")
const height = parseInt(readline.prompt())


// 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
const totalLength = (width * 2) + (height * 2)

// 길이(cm) => ft
// 1ft = 30.48
const totalFeet = Math.ceil(totalLength / 30.48)


// 가격 계산
const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)


// 문제 발생의 경우 해결할수있는 능력세우기.
// (사용자가 입력방법을 잘못했을시 특정 라인으로 이동(제어) 가능하도록 만들기)
// js의 예외처리에 대하여 숙지하도록 한다.
// 반복문사용하기.