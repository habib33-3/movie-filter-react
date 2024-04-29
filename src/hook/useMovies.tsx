import { useEffect, useState } from "react";
import { IMovie } from "../types/movie";

const useMovies = () => {
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

  return { movies };
};

export default useMovies;
