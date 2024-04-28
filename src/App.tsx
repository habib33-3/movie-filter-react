import { useEffect, useState } from "react";
import Filter from "./components/Movies/Filter/Filter";
import Movies from "./components/Movies/Movies";
import { IMovie } from "./types/movie";

const App = () => {
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

  const handleFilterChange = (filterValues: {
    genres: string;
    languages: string;
    countries: string;
  }) => {
    setGenres(filterValues.genres);
    setLanguages(filterValues.languages);
    setCountries(filterValues.countries);
  };
  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Movies
        movies={movies}
        genres={genres}
        languages={languages}
        countries={countries}
      />
    </div>
  );
};

export default App;
