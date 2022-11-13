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
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
