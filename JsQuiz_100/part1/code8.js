/* 문제8: 객체의 키 이름 중복

자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

```jsx
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);
```

*/

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature': 36,
    'eyesight': 1
};

console.log(d.weight);

//제일 나중에 선언된 변수의 값이 출력