import { FC, useState } from "react";
import { countryFilters, genreFilters, languageFilters } from "../../../data/filerOptions";


interface FilterProps {
  onFilterChange: (filters: {
    genres: string;
    languages: string;
    countries: string;
  }) => void;
}

const Filter: FC<FilterProps> = ({ onFilterChange }) => {
  const [genres, setGenres] = useState("");
  const [languages, setLanguages] = useState("");
  const [countries, setCountries] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      genres,
      languages,
      countries,
    });
  };

  return (
    <div className="w-full mx-auto mt-10 flex flex-col items-center">
    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center justify-center">
      <select
        id="genre-filter"
        name="genre-filter"
        className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        value={genres}
        onChange={(e) => {
          setGenres(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">All</option>
        {genreFilters.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        id="language-filter"
        name="language-filter"
        className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        value={languages}
        onChange={(e) => {
          setLanguages(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">All</option>
        {languageFilters.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        id="country-filter"
        name="country-filter"
        className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        value={countries}
        onChange={(e) => {
          setCountries(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">All</option>
        {countryFilters.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
  );
};

export default Filter;
