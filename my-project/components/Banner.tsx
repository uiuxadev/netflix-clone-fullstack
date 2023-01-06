import { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constants/movie";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  // movie is going to be type of Movie or null by default
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // netflixOriginals is array
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image
          // layout="fill"
          // objectFit="cover"
          width={500}
          height={500}
          alt="tse"
          // add "?" for null case
          // set 2 options as an alternative
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        />
      </div>
    </div>
  );
};

export default Banner;
