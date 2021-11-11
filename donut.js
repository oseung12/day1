
const readline = require('readline-sync');

// 도넛모양의 도형 각각 반지름 10, 20일때 해당 도형의 넓이 구하기.
// 큰원(원A)의 넓이 - 작은원(원B)의 넓이

//
// (변수) 주어진 데이터 반지름 각각 2개  변수를 각각 r1,r2로 잡음.
const r1 = 10
const r2 = 20

//주어진 데이터로 원의 넓이를 구하여야 한다
// (변수) 계산 & 연산_  원A, 원B의 넓이 구하기.  ** 원의 넓이 구하는 공식 : 반지름 제곱 * 파이(원주율)
const area1 = Math.pow(r1,2) * Math.PI
const area2 = Math.pow(r2,2) * Math.PI

// 계산 & 연산_ 원A와 원B의 넓이 차이 구하기
let gap = area1 - area2

// if 사용법
// if(gap < 0) {
//    gap = gap * -1
// }

//삼항연산자 사용법
gap = gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

// (변수) 사용자 입력
//console.log("이 도형의 넓이는 " + gap + " 입니다.")

console.log(`이 도형의 넓이는 ${gap} 입니다`)
