import { useMemo, useState } from "react";
import useMovies from "../../hook/useMovies";
import {
  countryFilters,
  genresFilters,
  languagesFilters,
} from "../../data/filerOptions";
import Movies from "../Movies/Movies";

const Filter = () => {
  const { movies } = useMovies();
  const [genres, setGenres] = useState<string>("All");
  const [languages, setLanguages] = useState<string>("All");
  const [countries, setCountries] = useState<string>("All");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const genreMatch = genres === "All" || movie.moviegenres.includes(genres);
      const languageMatch =
        languages === "All" || movie.movielanguages.includes(languages);
      const countryMatch =
        countries === "All" || movie.moviecountries.includes(countries);
      return genreMatch && languageMatch && countryMatch;
    });
  }, [movies, genres, languages, countries]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-4">
        <select
          id="genre-filter"
          name="genre-filter"
          className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider bg-gray-300 font-bold"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        >
          <option value="All">Genre</option>
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
          className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider bg-gray-300 font-bold"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        >
          <option value="All">Language</option>
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
          className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider bg-gray-300 font-bold"
          value={countries}
          onChange={(e) => setCountries(e.target.value)}
        >
          <option value="All">Country</option>
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

      <Movies filteredMovies={filteredMovies} />
    </div>
  );
};

export default Filter;
