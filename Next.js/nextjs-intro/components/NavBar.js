//nextjs에서는 href를 a태그 대신 link태그에 사용해 라우팅을 하길 권한다.

//css 적용 방법1
// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

// export default function NavBar() {
//   const router = useRouter();
//   return (
//     <nav className={styles.nav}>
//       <Link href="/" legacyBehavior>
//         <a
//           className={`${styles.link} ${
//             router.pathname === "/" ? styles.active : ""
//           }`}
//         >
//           Home
//         </a>
//       </Link>
//       <Link href="/about" legacyBehavior>
//         <a className={router.pathname === "/about" ? styles.active : ""}>
//           About
//         </a>
//       </Link>
//     </nav>
//   );
// }

//css적용방법2 : styled jsx
// style jsx의 스타일들은 오직 이 컴포넌트 내부로 범위가 한정된다.
//classname은 독립적이라 부모 커포넌트에서 a태그 스타일을 변경해도 영향을 주지 않는다.
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
