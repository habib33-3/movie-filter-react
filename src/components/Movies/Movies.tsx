import { useEffect, useState } from "react";
import { IMovie } from "../../types/movie";
import MovieCard from "./MovieCard/MovieCard";
import {
  countryFilters,
  genresFilters,
  languagesFilters,
} from "../../data/filerOptions";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<string>("All");
  const [languages, setLanguages] = useState<string>("All");
  const [countries, setCountries] = useState<string>("All");

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

  const filteredMovies = movies.filter((movie) => {
    const genreMatch = genres === "All" || movie.moviegenres.includes(genres);
    const languageMatch =
      languages === "All" || movie.movielanguages.includes(languages);
    const countryMatch =
      countries === "All" || movie.moviecountries.includes(countries);
    return (
      (genres === "All" || genreMatch) &&
      (languages === "All" || languageMatch) &&
      (countries === "All" || countryMatch)
    );
  });

  return (
    <section>
      <div className="w-full mx-auto mt-10">
        <div className="flex space-x-4">
          <select
            id="genre-filter"
            name="genre-filter"
            className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          >
            <option
              value="All"
              selected
            >
              All
            </option>
            {genresFilters.map((option) => (
              <option
                key={option}
                value={option}
                className="capitalize"
              >
                {option}
              </option>
            ))}
          </select>
          <select
            id="language-filter"
            name="language-filter"
            className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          >
            <option
              value="All"
              selected
            >
              All
            </option>
            {languagesFilters.map((option) => (
              <option
                key={option}
                value={option}
                className="capitalize"
              >
                {option}
              </option>
            ))}
          </select>
          <select
            id="country-filter"
            name="country-filter"
            className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            value={countries}
            onChange={(e) => setCountries(e.target.value)}
          >
            <option
              value="All"
              selected
            >
              All
            </option>
            {countryFilters.map((option) => (
              <option
                key={option}
                value={option}
                className="capitalize"
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <h1 className="text-center text-5xl font-bold">Movies</h1>
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
