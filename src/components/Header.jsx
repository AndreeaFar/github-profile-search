import backgroundImage from '../assets/hero-image-github-profile.png';
import searchIcon from '../assets/Search.svg';

const Header = () => {
  return (
    <header
      className=" bg-cover bg-center h-64 p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <div className="flex items-center justify-center">
        <div className="flex items-center w-2/4 p-4 bg-grayblue rounded-lg ">
          <img src={searchIcon} alt="Search" className=" w-5 h-5 mr-3" />
          <input
            type="text"
            className="rounded-lg w-full text-light bg-grayblue placeholder-gray focus:outline-none"
            placeholder="username"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
