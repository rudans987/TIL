.toLowerCase() 는 모든 문자열을 소문자로 변환합니다.
.toUpperCase() 는 모든 문자열을 대문자로 변환합니다.


Date()
함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다.

```
let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)  // 월은 0부터 시작 
let birthday = new Date(1995, 11, 17, 3, 24, 0)
//Sun Dec 17 1995 03:24:00 GMT+0900 (한국 표준시)
```

a월 b일 주어졌을때 요일 구하는 법
```
function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3);
}
```

 sort()
 ```
 let numbers = [4, 3, 1, 5, 2];

// 오름차순 정렬
numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]

// 내림차순 정렬
numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]
```