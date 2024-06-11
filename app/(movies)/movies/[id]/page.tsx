import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 4000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 4000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // 1. 순차적으로 실행됨
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // 2. 동시에 실행됨, 2개의 함수가 다끝나야지 UI를 보여줌
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // 3. 각각 따로 불러오는 방법, page 안에 await 하는게 있다면 loading.tsx 가 뜨지만,
  // suspense 로 각각 컴포넌트를 await 하게되면 loading.tsx는 더이상 동작하지 않음
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
