//components
import Category from "./Category/Category";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./CategorySort.module.scss";

const CategorySort = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const allProductsHandler = () => {
    dispatch(productsAction.setProductsDisplay(products));
  };

  return (
    <ul className={styles.sortContainer}>
      <li>
        <p className={styles.category} onClick={allProductsHandler}>
          All Products
        </p>
      </li>
      <h3>Category</h3>
      <Category category={"automotive"}>Automotive</Category>
      <Category category={"fragrances"}>Fragrances</Category>
      <Category category={"furniture"}>Furniture</Category>
      <Category category={"groceries"}>Groceries</Category>
      <Category category={"home-decoration"}>Home Decoration</Category>
      <Category category={"womens-jewellery"}>Jewelry</Category>
      <Category category={"laptops"}>Laptops</Category>
      <Category category={"lighting"}>Lighting</Category>
      <Category category={"mens-shirts"}>Men's Shirts</Category>
      <Category category={"mens-shoes"}>Men's Shoes</Category>
      <Category category={"mens-watches"}>Men's Watches</Category>
      <Category category={"motorcycle"}>Motorcycle</Category>
      <Category category={"skincare"}>Skin Care</Category>
      <Category category={"smartphones"}>Smartphones</Category>
      <Category category={"sunglasses"}>Sunglasses</Category>
      <Category category={"tops"}>Tops</Category>
      <Category category={"womens-bags"}>Women's Bags</Category>
      <Category category={"womens-dresses"}>Women's Dresses</Category>
      <Category category={"womens-shoes"}>Women's Shoes</Category>
      <Category category={"womens-watches"}>Women's Watches</Category>
    </ul>
  );
};

export default CategorySort;
