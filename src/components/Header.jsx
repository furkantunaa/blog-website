const Header = () => {
  return (
    <div className="header text-white bg-header h-[520px] bg-cover bg-no-repeat flex justify-center items-center flex-col text-xl ">
      <h3>Blog</h3>
      <h1 className="text-3xl">Good Places</h1>
      <h3>I haven't been anywhere,but its on my list.</h3>
      <button className="mt-8 bg-transparent border p-4 w-[23%] rounded cursor-pointer  hover:backdrop-contrast-50	hover:bg-white hover:text-blue-400 text-sm">
        Blogs
      </button>
    </div>
  );
};

export default Header;
