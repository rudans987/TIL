///라우팅 방법
// 페이지가 하나밖에 없다면 폴더를 만들어주지 않아도 된다.
//ex) /movies => movies.js
// 중복된 url을 가지는 페이지가 여러개라면 폴더를 만들어주면 된다.
// ex)/movies, /movies/all => movies폴더 안데 index.js, all.js

// 동적 라우팅
// url에 변수를 넣는 방법 ex) /movies/5456
// 파일이름을 대괄호([])로 감싼 변수명으로 이름 짓는다.

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return "detail";
}
