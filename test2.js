
// 1ft당  3.5$인 철근
// 창문을 만들 때 가로 300 * 세로 200 을 사용할때 나오는 철근의 가격 구하기.

const perFeet = 3.5

const width = 300
const height = 200

// 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
const totalLength = (width * 2) + (height * 2)

// 길이(cm) => ft
// 1ft = 30.48
const totalFeet = Math.ceil(totalLength / 30.48)

console.log(totalFeet)

// 가격 계산
const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)
