import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  return (
    <div className="w-full px-8 py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44 my-2"
        src={LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex gap-2 px-2 ">
          <img
            className="w-10 h-10 rounded-3xl shadow-md"
            src={user.photoURL}
            alt="user-logo"
          />
          <button
            className=" px-3 bg-red-700 rounded-lg text-white font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
