import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <picture>
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            alt="logo"
          />
        </picture>

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
