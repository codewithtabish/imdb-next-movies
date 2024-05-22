import AppLoader from "@/components/loader/AppLoader";
import MoviesList from "@/components/Movies/MoviesList";
import { Suspense } from "react";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1&limit=20`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <Suspense
      fallback={
        <p>
          THIS IS JUST Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Rem praesentium ipsam adipisci! Corrupti architecto temporibus ex
          atque nesciunt, soluta in consequatur maiores delectus totam dicta
          eos. Corrupti reprehenderit earum cumque.
        </p>
      }
    >
      <MoviesList movies={results} />
    </Suspense>
  );
}
