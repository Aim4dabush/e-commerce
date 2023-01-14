import { createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

//actions
import { authActions } from "../slices/authSlice";
import { cartsActions } from "../slices/cartsSlice";

export const registerUser = (email, password) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      const user = res.user;

      if (!user.uid) {
        return console.log("User not registered");
      }

      console.log("thunk", user);
    });
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    await signInWithEmailAndPassword(auth, email, password).then(async (res) => {
      if (!res.user.uid) {
        return console.log("User not logged in");
      }

      localStorage.setItem("user", res.user.uid);

      await getIdToken(res.user).then((token) => {
        if (token === "") {
          return console.log("token error");
        }

        localStorage.setItem("token", token);
      });

      dispatch(
        authActions.setUser({
          id: localStorage.getItem("user"),
          token: localStorage.getItem("token"),
        })
      );
    });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await signOut(auth).then(() => {
      localStorage.clear();
      dispatch(authActions.resetUser());
      dispatch(cartsActions.setResetShoppingData());
      dispatch(cartsActions.setResetWishData());
    });
  };
};
