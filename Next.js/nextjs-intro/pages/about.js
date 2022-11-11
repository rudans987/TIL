// 라우팅 규칙
// 컴포넌트에 export default를 써야 한다.
// 중요한건 파일명, 함수명은 상관없음
// 파일명이 url주소로 쓰인다.
// localhost:3000/about을 url주소창에 입력하면 about us가 보이게 된다.
// index.js는 localhost:3000로 연결된다.

export default function Potato() {
  return "about us";
}
