import { Link, useNavigate } from "react-router-dom";
import { isUserActive } from "../utils";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setState } from "../redux/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const fullname = useSelector(
    (state) => state.user.userInfo.payload?.fullName
  );
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setState(null));
    navigate("/login");
  };

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mx-auto my-0 max-w-[1000px] h-24">
        <a className="text-2xl text-blue-700 " href="/">
          postBlog
        </a>
        <ul className="flex lg:hidden justify-center items-center  text-blue-500 gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/create-new-post">Create New Post</Link>
          </li>
          {isUserActive() ? (
            <>
              <div>{fullname ?? ""}</div>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
        <button className="hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
