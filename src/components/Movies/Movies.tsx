import { useEffect, useState } from "react";
import { IMovie } from "../../types/movie";
import MovieCard from "./MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./movies.json");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="w-full mx-auto mt-10">
        <h1 className="text-center text-5xl font-bold">Movies</h1>
        <div className="mt-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 justify-center items-center gap-0 lg:gap-3 w-full lg:w-11/12 mx-auto">
          {movies.map((movie: IMovie) => (
            <MovieCard
              movie={movie}
              key={movie.imdbmovieid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
