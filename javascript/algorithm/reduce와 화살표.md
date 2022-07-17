# reduce와 화살표 함수

## 목차
- [Array.prototype.reduce()](#1arrayprototypereduce)
- [화살표 함수](#2화살표-함수)

## 1.Array.prototype.reduce()
- reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
- 리듀서 함수는 네 개의 인자를 가집니다.

    - 누산기 (acc)<br />
    - 현재 값 (cur)<br />
    - 현재 인덱스 (idx)<br />
    - 원본 배열 (src)

- 리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

- 구문<br />
```arr.reduce(callback[ ,initialValue])```
- 매개변수
    - callback :
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
    - accumulator :
누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
    - currentValue :
처리할 현재 요소.
    - currentIndex (Optional)
처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
    - array (Optional)
reduce()를 호출한 배열.<br /><br/>

- 콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다. initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.
- reduce() 작동  방식
    - ```javascript
        [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
         return accumulator + currentValue;
        });
        ```

    -  ```javascript
        [0, 1, 2, 3, 4].reduce(   (prev, curr) => prev + curr );
        ```
    - 완전한 함수 대신에 화살표 함수를 제공할 수도 있습니다. 아래 코드는 위의 코드와 같은 결과를 반환합니다.
    - ```javascript
        var initialValue = 0;
        var sum = [{x: 1}, {x:2}, {x:3}].reduce(
        (accumulator, currentValue) => accumulator + currentValue.x
        ,initialValue
        );

        console.log(sum) // logs 6
        ```



## 2.화살표 함수

- 화살표 함수 arrow function 는 function 키워드 대신 화살표 => 를 사용하여 기존의 함수 정의 방식보다 간략하게 함수를 정의할 수 있음
- 표현만 간략한 것이 아니라 내부 동작도 기존 함수보다 간략
- 화살표 함수는 콜백함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대한으로 유용

### 화살표 함수 정의 문법
- 화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식(값으로 평가될 수 있는 문)으로 정의

1) 매개변수 선언
> - 매개변수가 여러 개인 경우 소괄호() 안에 매개변수를 선언 `const arrow = (x, y) => x * y;`
> - 매개변수가 한 개인 경우 소괄호()를 생략 할 수 있음 `const arrow = x => { ... }`
> - 매개변수가 없는 경우 소괄호()를 생략 할 수 없음 `const arrow = () => { ... }` 

2) 함수 몸체 정의 
> - 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 있음 
>> `const power = x => x ** 2;`
> - 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환됨
>> `const power = x => { return x ** 2 };`
> - 함수 몸체를 감싸는 중괄호{}를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면 에러가 발생함 :::: 표현식이 아닌 문은 반환할 수 없기 때문
>> `const arrow = () => const x = 1; // SyntaxError`
>> `const arrow = () => { return const x = 1; }`
> - 함수 몸체가 하나의 문으로 구성된다 해도 함수 몸체의 문이 표현식이 아닌 문이라면 중괄호를 생략할 수 없음
> - 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호()로 감싸주어야 함 :::: 객체 리터럴을 소괄호로 감싸지 않으면 객체 리터럴의 중괄호{}를 함수 모체를 감싸는 중괄호{}로 잘못 해석 됨
>> `const create = (id, content) => ({ id, content })`
> 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호를 생략할 수 없음, 이때 반환값이 있다면 명시적으로 반환해야 함
> 화살표 함수도 즉시 실행 함수고 사용할 수 있음
> 화살표 함수도 일급객체이므로 고차 함수에 인수로 전달할 수 있음
> 콜백함수로 정의할 때 유용

  

