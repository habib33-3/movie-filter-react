import { FC } from "react";
import { IMovie } from "../../../../types/movie";
import { AiOutlineClose } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";

interface DetailsModalPropType {
  movie: IMovie;
  setIsModalOpen: (value: boolean) => void;
}

const DetailsModal: FC<DetailsModalPropType> = ({ movie, setIsModalOpen }) => {
  const {
    movietitle,
    imdbmovieid,
    movielanguages,
    moviecountries,
    moviegenres,
    moviemainphotos,
  } = movie;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-gray-900 p-8 rounded-lg z-50 w-3/4 md:w-1/2 lg:w-1/3 max-h-full overflow-y-auto relative">
        <div className="absolute top-0 right-0 p-2">
          <AiOutlineClose
            className="text-white cursor-pointer transition duration-300 hover:bg-gray-700 rounded-md p-1"
            size={24}
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="mb-4">
          <img
            src={moviemainphotos[0]}
            alt={movietitle}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          {movietitle}
        </h2>
        <a
          href={`https://www.imdb.com/title/${imdbmovieid}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl font-bold flex items-center justify-center"
        >
          <FaImdb className="mr-2" />
          IMDb
        </a>

        <p className="text-white">Languages: {movielanguages.join(", ")}</p>
        <p className="text-white">Countries: {moviecountries.join(", ")}</p>
        <p className="text-white">Genres: {moviegenres.join(", ")}</p>
      </div>
    </div>
  );
};

export default DetailsModal;
