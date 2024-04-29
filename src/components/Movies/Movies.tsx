import { FC } from "react";
import { IMovie } from "../../types/movie";
import MovieCard from "./MovieCard/MovieCard";

interface FilteredMoviesPropTypes {
  filteredMovies: IMovie[];
}
const Movies: FC<FilteredMoviesPropTypes> = ({ filteredMovies }) => {
  return (
    <section>
      <div className="w-full mx-auto mt-10">
        <div className="mt-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 justify-center items-center gap-0 lg:gap-3 w-full lg:w-11/12 mx-auto">
          {filteredMovies.map((movie: IMovie) => (
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
