import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function MoviePage({ params }: any) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={400}
          height={450}
          alt="single movie data"
          className="rounded-lg object-cover"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <Card className="border-none dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-xl">
              {movie.title || movie.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="">{movie.overview}</CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <p className="mb-3 mt-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
