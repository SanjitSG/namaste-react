import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, supported_languages } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10 flex  flex-col md:justify-between items-center md:flex-row">
      <img
        className="w-28 md:w-44 my-2"
        src={LOGO}
        alt="netflix-logo"
      />

      {user && (
        <div className="flex h-11items-center gap-2 px-2 text-white pt-3 md:pt-0">
          {showGptSearch && (
            <select
              name="language-selector"
              className="rounded-lg p-2 bg-gray-800"
              onChange={handleLanguageChange}
            >
              {supported_languages.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.language}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 w-28 rounded-lg font-semibold bg-teal-500"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <button
            className="p-2 w-28 bg-red-700 rounded-lg font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <img
            className="hidden md:block w-10 h-10 rounded-3xl shadow-md"
            src={user.photoURL}
            alt="user-logo"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
