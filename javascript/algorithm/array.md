# array, .indexOf()

arr.push() : 배열 끝에 요소 추가
arr.unshift() : 배열 처음에 요소 추가

## .indexOf()
- 형태 : string.indexOf(searchvalue, position)
- indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
- searchvalue : 필수 입력값, 찾을 문자열
- position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치
- 찾는 문자열이 없으면 -1을 리턴합니다.
- 문자열을 찾을 때 대소문자를 구분합니다.


## .split()

- 
- 형태 : str.split([separator[, limit]])
- separator : 주어진 문자열을 separator마다 끊은 부분 문자열을 담은 Array.
- limit : 끊어진 문자열의 최대 개수를 나타내는 정수입니다.
- separator를 안줬을 떄 문자열 전체를 length 1인 배열에 담아서 리턴합니다.
- (separator="")일때 글자별로 잘라서 배열에 담기 
- (separator=" ")일때 공백 기준으로 배열에 담기
- (separator=",")일때 콤마 기준으로 배열에 담기 

## .match() 메서드
- 문자열이 정규식과 매치되는 부분을 검색합니다.
- 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 옵니다. 일치하는 것이 없으면 null이 반환됩니다.
- 형태 : str.match(regexp)
- str.match();   // returns [""]
- 



isNaN() 
- 주어진 문자열이 숫자인지 확인하는 함수
