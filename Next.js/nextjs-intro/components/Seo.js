//웹 사이트 탭 이름 바꾸는 법

import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
