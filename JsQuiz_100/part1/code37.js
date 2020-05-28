/* 문제37: 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
**학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

**입력**
원범 원범 혜원 혜원 혜원 혜원 유진 유진

**출력**
혜원(이)가 총 4표로 반장이 되었습니다.
*/

const name = prompt('이름을 입력하세요').split(" ");

let arr = [];
let max = 0;
let answer = "";

for (let i = 0; i < name.length; i++) {
    arr = name.filter(n => name[i] === n)
    if(arr.length > max){       //max와 비교하여 max보다 크면 arr.length를 max에 넣어줌
       max = arr.length;        //'원범'의 길이 2로 바뀐 max => 반복 진행 => '혜원'의 길이 4로 바뀐 max 
       answer = arr[0];         //이름을 출력하기 위해 answer 변수를 주어 arr[0]을 담아 출력
    }
}
console.log(`${answer}이가 총 ${max}표로 반장이 되었습니다.`);

// const name = prompt('이름을 입력해주세요.').split(' ');
// let result ={};
// let winner = "";

// for(let index in name){
//     let val = name[index]
//     result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1
//     console.log(result)
// }

// winner = Object.keys(result).reduce((a,b)=> {
//      return result[a] > result[b] ? a : b
// })

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`)