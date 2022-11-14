// js파일에서 jsx문법 사용 가능
// import react from react 를 안해도 됨
// import { useState } from "react";

// export default function Home() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <h1>Hello {counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
//     </div>
//   );
// }

import Seo from "../components/Seo";
export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  );
}
