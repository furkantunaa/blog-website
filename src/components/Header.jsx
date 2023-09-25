import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header text-white bg-header h-[520px] bg-cover bg-no-repeat flex justify-center items-center flex-col text-xl ">
        <h3>Blog</h3>
        <h1 className="text-3xl">Good Places</h1>
        <h3>I haven't been anywhere,but its on my list.</h3>
        <Link to={"/articles"}>
          <button
            onClick={(e) => e.target.value}
            className="mt-8  pl-32 bg-transparent border p-4 pr-40 w-min rounded cursor-pointer  hover:backdrop-contrast-50	hover:bg-white hover:text-blue-400 text-sm"
          >
            Blogs
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
