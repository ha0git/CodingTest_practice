/* 문제 16: 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

**입출력**

입력 : 거꾸로
출력 : 로꾸거

*/
let a = '거꾸로';

for (let i = (a.length - 1); i >= 0; i--) {
    console.log(a.charAt(i))
}

/*답안
const a = '거꾸로';

const n = a.split('').reverse().join('')

console.log(n)
*/
