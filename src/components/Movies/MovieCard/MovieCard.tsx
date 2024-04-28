import React, { useState } from "react";
import { IMovie } from "../../../types/movie";
import DetailsModal from "./DetailsModal/DetailsModal";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { movietitle, moviemainphotos } = movie;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center gap-2 lg:rounded-xl border border-gray-300 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={moviemainphotos}
        alt={movietitle}
        className="w-full h-56 object-cover lg:rounded-t-xl transition duration-300 transform hover:scale-105"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
        <h2 className="text-white text-lg font-semibold mb-2">{movietitle}</h2>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          View Details
        </button>
      </div>

      {isModalOpen && (
        <DetailsModal
          movie={movie}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default MovieCard;
