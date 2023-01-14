import { db } from "../../firebase/firebase";
import { onValue, ref, set } from "firebase/database";

//actions
import { cartsActions } from "../slices/cartsSlice";

export const addToWishCart = (user, data) => {
  return async () => {
    const docRef = ref(db, `users/${user}/wish-cart`);
    await set(docRef, data);
  };
};

export const getWishCart = (user) => {
  return (dispatch) => {
    const docRef = ref(db, `users/${user}/wish-cart`);
    onValue(docRef, (res) => {
      if (res.val()?.length === 0) {
        return console.log("No data from firebase");
      }

      dispatch(cartsActions.setWishCart(res.val()));
    });
  };
};
