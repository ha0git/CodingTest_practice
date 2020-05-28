javascript 100제 문제풀이
===

# part1
- 1~50번까지 문제 풀이
- 틀렸던 문제 위주로 작성
- 오답 원인 및 재풀이 방법 제시
- 새로 알게 된 점에 대한 설명글

<br>
<br>

## code12.js
게임 캐릭터 클래스 만들기

### 오답 원인
클래스 작성 방법에 대해 잘 알지 못함.
constructor의 쓰임을 알아야 하고, 메서드 작성 및 호출에 대해서 공부가 필요함

### 정답
```jsx
const Wizard = class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼')
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
```

### 알게 된 점
#### `class`
프로토기반 상속을 사용하여 주어진 이름으로 새로운 클래스를 만든다

- 클래스 선언은 호이스팅이 일어나지 않는다
- 선언문으로 클래스를 중복 선언하면 에러가 발생한다
- 표현식으로 클래스를 선언하면 기명, 익명 모두 클래스 선언 가능하다

#### `constructor`
class 내에서 객체를 생성하고 초기화하기 위한 메서드

<br>

## code16.js
로꾸거

### 오답 원인
배열 내장함수를 사용하지 않고, 복잡한 코드로 구현함

```jsx
let a = '거꾸로';

for (let i = (a.length - 1); i >= 0; i--) {
    console.log(a.charAt(i))
}
```
### 정답
```jsx
const a = '거꾸로';

const n = a.split('').reverse().join('')

console.log(n)
```
### 알게 된 점
- `split()` : 문자열을 배열로 변환하여 반환, 인자로 받은 구분자로 문자열 분리
- `reverse()` : 배열 순서를 반대로 나열, 원본 배열을 변환하기 때문에 주의
- `join()` : 각 배열 요소를 병합하여 하나의 문자열로 변환하는 메서드

<br>

## code18.js
평균 점수

### 오답 원인
십진수로 표현하는 방법과 반올림 하는 방법에 대해 미숙함

```jsx
let num = prompt('세 점수를 입력하세요').split(' ');    //3개의 입력값을 배열로 받음

result = (num[0] + num[1] + num[2]);

console.log(result);
```

### 정답
```jsx
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for(let i=0; i<3; i++){
    sum += parsInt(scores[i], 10)   
    }

console.log(Math.floor(sum/3));
```

### 알게 된 점
- `parseInt(변수, 10)` : 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
- `Math.floor(sum/3)` : Math.floor 메서드는 소수점 자리를 모두 버림합니다.

<br>

## code25.js
원의 넓이를 구하세요

### 오답 원인
계산식을 함수로 만들지 않고 직접적으로 작성함. 
함수를 만들어 호출하는 방식에 익숙해져야함

```jsx
const r = prompt('반지름의 길이');

const s = r * r * 3.14;
console.log(s);
```

### 정답
```jsx
function circle(n) {
  const result = n * n * 3.14;

  return result;
}

const r = prompt("원의 반지름을 입력하세요.");

console.log(circle(r));
```

### 알게 된 점
- 함수로 만들어 호출하는 방식으로 많이 작성해볼것!

<br>

## code31.js
자바스크립트 자료형의 복잡도

### 오답 원인
빅오 표기법과 배열 내장함수에 대한 이해가 부족함.

### 알게 된 점
`빅오표기법`
- O(1) 인 경우 : 특정 배열의 위치 값을 가져오는 메서드
- O(N) 인 경우 : N개의 요소에 대해 선형적으로 순회하는 메서드
    - ex) 배열을 복사하거나, 배열을 순회하여 비교하는 경우 등

- `slice()` : 원본 배열을 순회하여 새로운 배열에 push 작업을 함
- `include()` : 원본 배열을 순회하여 특정 문자열을 포함하는지 확인

<br>

## code33.js
거꾸로 출력하기

### 오답 원인
또..또..! reverse함수를 잊어버리고 for문으로 작성함

```jsx
const num = prompt('숫자를 입력하세요').split(' ');
let result = '';

for (let i = num.length; i > 0; i--) {
    result = num[i - 1]
    console.log(result)
}
```

### 정답
```jsx
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);
```
### 알게 된 점
- `split()`으로 배열로 만든 후 `reverse()`로 역순 변환 한 다음 변수에 넣어주면 됨
- 내장함수를 잊어버리지 말기!

<br>

## code35.js
Factory 함수 사용하기

### 오답 원인
함수내의 변수 선언과 리턴 값에 대한 이해도 부족

### 정답
```jsx
function one(n) {
    function two(m) {
        const sq = Math.pow(m, n)
        return sq;
    }
    return two;
}
const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```

### 알게 된 점
- 함수 내에서 변수를 선언하고 계산된 값을 리턴받아 처리함
- `Math.pow()` : 특정 숫자의 거듭제곱 값을 계산해주는 함수

<br>

## code36.js
구구단 출력하기

### 오답 원인
출력 형식(값을 가로로 출력하는 방식)을 지키지 않음

### 정답
```jsx
const dan = prompt('단을 입력하세요');
let result = '';

for(let i=1; i<=9; i++){
    result += dan * i + ' ';
}
console.log(result)
```

### 알게 된 점
- 출력 형식을 항상 잘 살필 것!
- 한 줄로 출력하고 싶다면 `대입연산자`로 값을 누적시켜 문자열로 한 번에 출력하기

<br>

## code37.js
반장 선거

### 오답 원인
- 배열 길이의 최대값을 구하는 방법을 알지 못함

### 정답
```jsx
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];   //val에 이름을 담는다.
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
```

### 알게 된 점
- `reduce` 함수 : 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환함
- `줄이다` 라는 뜻으로 배열을 순회하며 인덱스 데이터를 줄여가며 어떠한 기능을 수행 할 수 있다
- 배열 안의 값을 비교할 때는 reduce함수를 쓸 수도 있다는 것!
```jsx
winner = Object.keys(result).reduce(function(a,b){
    return result[a] > result[b] ? a : b
})
```

<br>

