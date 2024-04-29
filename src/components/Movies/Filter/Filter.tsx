import { useState } from "react";
import useMovies from "../../../hook/useMovies";
import {
  countryFilters,
  genresFilters,
  languagesFilters,
} from "../../../data/filerOptions";
import Movies from "../Movies";

const Filter = () => {
  const { movies } = useMovies();
  const [genres, setGenres] = useState<string>("All");
  const [languages, setLanguages] = useState<string>("All");
  const [countries, setCountries] = useState<string>("All");

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
    <div>
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

      <Movies filteredMovies={filteredMovies} />
    </div>
  );
};

export default Filter;
