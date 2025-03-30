import Links from './Links';

const NavBar = () => {
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          px-4
          text-lg 
          shadow-md
          
        "
    >
      <div className="text-4xl font-bold ">
        Today{"'"}s Hot Livestream Fail Clips
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <Links />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
