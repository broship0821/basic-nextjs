import Link from "next/link";

export const metadata = {
  titie: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //일부러 시간 끌기
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
