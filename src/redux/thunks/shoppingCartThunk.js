import { db } from "../../firebase/firebase";
import { ref, set, onValue } from "firebase/database";

//actions
import { cartsActions } from "../slices/cartsSlice";

export const addToShoppingCart = (user, data) => {
  return async () => {
    const docRef = ref(db, `users/${user}/shopping-cart`);
    await set(docRef, data);
  };
};

export const getShoppingCart = (user) => {
  return (dispatch) => {
    const docRef = ref(db, `users/${user}/shopping-cart`);
    onValue(docRef, (res) => {
      if (res.val().length === 0) {
        return console.log("No Data from firebase");
      }

      dispatch(cartsActions.setShoppingCart(res.val()));
    });
  };
};
