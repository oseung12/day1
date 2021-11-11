// 시계가 4시 47분을 가리킬때 내각을 구하시오.

const hour = 4
const min = 47

// 시침의 각도 계산  360 / 12 ; 4
let hourD = (360 / 12) * hour

// 분침의 각도 계산 360 / 60 ; 47
const minD = (360 / 60) * min

// 분에 따른 시침의 추가 이동  => 한시간에 시침은 30도 이동한다
const extra = (30 / 60) *min

hourD = hourD + extra
//HourD += extra

console.log(hourD, minD)

const gap = hourD - minD

console.log(gap)