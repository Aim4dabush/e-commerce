import { Routes, Route, Navigate } from "react-router-dom";

//components
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import ReturnPolicy from "../pages/ReturnPolicy/ReturnPolicy";
import ShippingPolicy from "../pages/ShippingPolicy/ShippingPolicy";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";

//redux
import { useSelector } from "react-redux";

const RoutePaths = () => {
  const isLoggedIn = useSelector((state) => state.auth.user.token);

  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Products />} />
        {isLoggedIn && <Route element={<Cart />} path="cart" />}
        <Route element={<Checkout />} path="checkout" />
        {!isLoggedIn && <Route element={<Login />} path="login" />}
        {isLoggedIn && <Route element={<OrderHistory />} path="order-history" />}
        <Route element={<PrivacyPolicy />} path="privacy-policy" />
        <Route element={<ProductDetail />} path="products/:productId" />
        <Route element={<Products />} path="products" />
        <Route element={<ReturnPolicy />} path="return-policy" />
        <Route element={<ShippingPolicy />} path="shipping-policy" />
        <Route element={<SignUp />} path="sign-up" />
        {isLoggedIn && <Route element={<WishList />} path="wish-list" />}
        <Route element={<Navigate to={"/login"} />} path="*" />
      </Route>
    </Routes>
  );
};

export default RoutePaths;
