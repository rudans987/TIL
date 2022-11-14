//redirect: redirect되면서 유저가 url변화를 볼 수 있다.
//source:"old-blog/:path*", destination: "/new-blog/:path*"
//위처럼 쓰면 old-blog 뒤에 뭐가 붙든 new-blog 뒤에 그대로 붙여서 redirect해준다.

//rewrite: redirect되지만 유저가 url변화를 볼 수 없다.
/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
