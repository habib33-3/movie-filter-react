import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const delay = 2000;

  const filterOptions = ["genre", "language"];

  return (
    <section className="w-full mx-auto px-10 py-7  min-h-[70vh] shadow-xl flex flex-col items-center justify-center gap-7">
      <div className="w-4/5 mx-auto text-center">
        <TypeAnimation
          sequence={[
            "Search movies at your ease",
            delay,
            "Search by title",
            delay,
            "Search by language",
            delay,
            "Search by genre",
            delay,
          ]}
          wrapper="div"
          speed={50}
          className="text-center inline-block text-5xl font-serif font-bold text-white"
          repeat={Infinity}
        />
      </div>
      <div className=" rounded-md  p-4">
        <form className="flex flex-col md:flex-row gap-3 items-center">
          <input
            type="text"
            placeholder="Search for the movie you like"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-blue-400 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r px-4 md:px-6 py-2 md:py-2.5 hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
          <select
            id="filter"
            name="filter"
            className="h-10 border-2 border-blue-400 focus:outline-none focus:border-blue-500 text-blue-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option value="All" selected>
              All
            </option>
            {filterOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="capitalize"
              >
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
    </section>
  );
};

export default Hero;
