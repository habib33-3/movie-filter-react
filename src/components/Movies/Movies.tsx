import  { FC, useEffect, useState } from "react";
import { IMovie } from "../../types/movie";
import MovieCard from "./MovieCard/MovieCard";

interface MoviesProps {
  movies: IMovie[];
  genres: string;
  languages: string;
  countries: string;
}

const Movies: FC<MoviesProps> = ({ movies, genres, languages, countries }) => {
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const genreMatch = genres === "All" || movie.moviegenres.includes(genres);
      const languageMatch =
        languages === "All" || movie.movielanguages.includes(languages);
      const countryMatch =
        countries === "All" || movie.moviecountries.includes(countries);
      return genreMatch && languageMatch && countryMatch;
    });
    setFilteredMovies(filtered);
  }, [movies, genres, languages, countries]);

  return (
    <section>
      <h1 className="text-center text-5xl font-bold">Movies</h1>
      <div className="mt-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 justify-center items-center gap-0 lg:gap-3 w-full lg:w-11/12 mx-auto">
        {filteredMovies.map((movie: IMovie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbmovieid}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
