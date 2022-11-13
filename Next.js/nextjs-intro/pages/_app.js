//전역 스타일, 헤더, 푸터 등 전역적인 모든걸 적용시키는 파일
// 파일이름은 무조건 _app.js 이 이름이어야 한다.
// 함수명은 상관없다.
// 각 페이지를 렌더링 할때 각 페이지의 함수를 가져와서 App함수의 첫번째 매개변수(Component)에 넣는다.
// globals.css는 _app.js에서만 임포트 할수있다.
// 다른 컴포넌트에서 css를 임포트할때는 module이 붙어야 한다.

import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      {/* 글로벌 스타일 적용하는 법 */}
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
