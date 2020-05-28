/*
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

*/

function solution(answers) {
    var answer = [];
    var a = [];
    var b = [];
    var c = [];
    var a1 = 0;
    var b1 = 0;
    var c1 = 0;
    
    //a 찍는 방식
    for(let i=0; i<answers.length; i++){
        switch(i % 5){
            case 0 : a[i] = 1;
                break;
            case 1 : a[i] = 2
                break;
            case 2 : a[i] = 3
                break;
            case 3 : a[i] = 4
                break;
            case 4 : a[i] = 5
                break;
        }
    }
    console.log(a)
    
    //b 찍는 방식
    for(let i=0; i<answers.length; i++){
            switch(i % 8){
                case 1 : b[i] = 1
                    break;
                case 3 : b[i] = 3
                    break;
                case 5 : b[i] = 4
                    break;
                case 7 : b[i] = 5
                    break;
                default : b[i] = 2
            }            
    }
    console.log(b)
    
    //c 찍는 방식
    for(let i=0; i<answers.length; i++){
        switch(i % 10){
            case 0 :
            case 1 : c[i] = 3
                break;
            case 2 :
            case 3 : c[i] = 1
                break;
            case 4 :
            case 5 : c[i] = 2
                break;
            case 6 :
            case 7 : c[i] = 4
                break;
            case 8 :
            case 9 : c[i] = 5
                break;
        }
    }
    console.log(c)
    
    console.log(answers)
    for(let i=0; i<answers.length; i++){
        if(a[i] === answers[i]){
            a1++;
        }
        if(b[i] === answers[i]){
            b1++;
        }
        if(c[i] === answers[i]){
            c1++;
        }
    }
    if(a1 > b1 && a1 > c1){
        answer = [1];
    }else if(b1 > a1 && b1 > c1){
        answer = [2];
    }else if(c1 > a1 && c1 > b1){
        answer = [3];
    }else if(a1 === b1 && b1 === c1 && a1 === c1){
        answer = [1,2,3]
    }else if(a1 === b1 && b1 !== c1 && c1 !== a1){
        answer = [1,2]
    }else if(b1 === c1 && c1 !== a1 && a1 !== b1){
        answer = [2,3]
    }else if(c1 === a1 && a1 !== b1 && b1 !== c1){
        answer = [1,3]
    }
    return answer;
}