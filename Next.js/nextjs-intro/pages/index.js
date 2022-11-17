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

import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
// import { useEffect, useState } from "react";

export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();
  const onClick = (id, title) => {
    // 보여주고 싶은 url로 설정하는 방법
    // 첫번째 인자: query로 다른 정보도 url을 통해 넘길수 있다.
    // 두번째 인자(url마스킹): 유저에게 보여질 url(넘기는 정보를 노출시키지 않도록)
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
              legacyBehavior
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 함수의 이름은 바꿀 수 없다.
// 아래 코드는 server에서 돌아가게 된다.
//그걸 이용해서 apikey를 숨길 수 있다.
// 로당 중이라는 상태를 보여주고 싶지 않다면 아래 함수를 쓴다.
//  백엔드에서 api처리가 끝날때까지 아무것도 보이지 않는다.
// 밑에 results는 18번째줄 results로 들어가고 30번째 줄에서 실행된다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000//api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
