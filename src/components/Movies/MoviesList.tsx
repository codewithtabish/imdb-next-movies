import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

const MoviesList = ({ movies }: any) => {
  return (
    <div className="max-w-6xl mx-auto py-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
      {movies.map((movie: any) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className="mx-2 md:mx-0"
        >
          <Card className="dark:bg-gray-700 dark:border-gray-600 border-none">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              width={300}
              height={300}
              className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 object-cover
              h-48 w-full"
              alt={movie.title}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
            <CardHeader className="font-medium min-h-8 max-h-8 overflow-hidden ">
              <CardTitle className="text-xl  ">
                {movie?.title || movie?.name || movie?.original_name}
              </CardTitle>
            </CardHeader>
            <CardContent className="my-3">
              <CardDescription>
                {movie.overview.length > 40
                  ? movie.overview.slice(0, 60) + "..."
                  : movie.overview}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
