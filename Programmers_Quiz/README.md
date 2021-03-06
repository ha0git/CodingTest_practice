# Programmers_Quiz
- 문제 별 나만의 해석 작성
- 오답 원인과 알게 된 점 파악
- retry: 다시 풀어볼 문제

<br>
<br>

## Q1.완주하지 못한 선수

### 나만의 해석
1. `sort()`으로 배열을 차순별로 정리한다.
2. for문을 사용하여 참가자 배열 길이만큼 순회한다.
3. 만약 같은 인덱스에 있는 문자가 일치하지 않는 경우, 해당 인덱스의 값을 리턴한다.

### 오답 원인 & 알게 된 점
- return의 정의를 다시 살펴야 함
- 이중 for문으로 순회해야한다고만 생각했는데, sort를 사용하여 for문을 1회만 사용하여 구현할 수 있었음

<br>

## Q2.K번째 수

### 나만의 해석
1. `slice()`메서드를 사용하여 원하는 범위의 값만 잘라서 새 배열(arr[])로 받는다.
2. 이중배열 commands 값을 조건에 맞게 뽑는다.
3. `push()`메서드를 사용하여 arr배열의 값을 넣어준다.

### 오답원인 & 알게 된 점
- 이중 배열 값 조회하는 방법 (for문 사용)
```javascript
    var arr = [];
    for(let i=o; i<commands.length; i++){
        arr[i] = commands[i][0]
    }
```
- `slice(begin, end)` : 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환함. 원본 배열은 바뀌지 않음.
- `push()` : 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함.

<br>

## Q3.모의고사

### 나만의 해석
1. 각 수포자들의 찍는 방식을 분석하여 로직을 작성
2. answers와 수포자들의 답을 비교하여 같으면 count(a1,b1,c1)를 올리도록 함
3. 각 count의 조건에 따라서 answer 배열에 [1,2,3] 중에 적절한 값을 넣도록 함

### 다른 사람의 풀이

```javascript
function solution(answers){
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i) => a === a1[i%a1.length]).length
    var a2c = answers.filter((a,i) => a === a2[i%a2.length]).length
    var a3c = answers.filter((a,i) => a === a3[i%a3.legnth]).length
    var max = Math.max(a1c,a2c,a3c);

    if(a1c === max) {answer.push(1)}
    if(a2c === max) {answer.push(2)}
    if(a3c === max) {answer.push(3)}

    return answer;
}
```

### 오답원인 & 알게 된 점
- 각 답이 담긴 배열의 길이를 구하는 식이 복잡함
- filter함수를 사용하여 원하는 조건의 배열만 뽑아낸 후 바로 length를 구할 수 있다!
- `Math.max`를 사용하지 않음
