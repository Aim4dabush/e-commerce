//components
import Category from "./Category/Category";

//images
import automotive from "../../../assets/automotive.jpg";
import fragrance from "../../../assets/fragrance.jpg";
import furniture from "../../../assets/furniture.jpg";
import groceries from "../../../assets/groceries.jpg";
import decorations from "../../../assets/home-decoration.jpg";
import jewelry from "../../../assets/jewelry.jpg";
import laptop from "../../../assets/laptop.jpg";
import lighting from "../../../assets/lighting.jpg";
import mensShirts from "../../../assets/mens-shirts.jpg";
import mensShoes from "../../../assets/mens-shoes.jpg";
import mensWatches from "../../../assets/mens-watches.jpg";
import motorcycle from "../../../assets/motorcycle.jpg";
import products from "../../../assets/products.jpg";
import skinCare from "../../../assets/skin-care.jpg";
import smartPhone from "../../../assets/smart-phone.jpg";
import sunglasses from "../../../assets/sunglasses.jpg";
import tops from "../../../assets/tops.jpg";
import womensBags from "../../../assets/womens-bags.jpg";
import womensDresses from "../../../assets/womens-dresses.jpg";
import womensShoes from "../../../assets/womens-shoes.jpg";
import womensWatches from "../../../assets/womens-watches.jpg";

//styles
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <Category image={products} name={"products"}>
        All Products
      </Category>
      <Category image={automotive} name={"automotive"}>
        Automotive
      </Category>
      <Category image={fragrance} name={"fragrance"}>
        Fragrance
      </Category>
      <Category image={furniture} name={"furniture"}>
        Furniture
      </Category>
      <Category image={groceries} name={"groceries"}>
        Groceries
      </Category>
      <Category image={decorations} name={"home-decoration"}>
        Home Decorations
      </Category>
      <Category image={jewelry} name={"jewellery"}>
        Jewelry
      </Category>
      <Category image={laptop} name={"laptop"}>
        Laptop
      </Category>
      <Category image={lighting} name={"lighting"}>
        Lighting
      </Category>
      <Category image={mensShirts} name={"mens-shirts"}>
        Men's Shirts
      </Category>
      <Category image={mensShoes} name={"mens-shoes"}>
        Men's Shoes
      </Category>
      <Category image={mensWatches} name={"mens-watches"}>
        Men's Watches
      </Category>
      <Category image={motorcycle} name="motorcycle">
        Motorcycle
      </Category>
      <Category image={skinCare} name={"skin-care"}>
        Skin Care
      </Category>
      <Category image={smartPhone} name={"smartphones"}>
        Smartphones
      </Category>
      <Category image={sunglasses} name={"sunglasses"}>
        Sunglasses
      </Category>
      <Category image={tops} name={"tops"}>
        Tops
      </Category>
      <Category image={womensBags} name={"womens-bags"}>
        Women's Bags
      </Category>
      <Category image={womensDresses} name={"womens-dresses"}>
        Women's Dresses
      </Category>
      <Category image={womensShoes} name={"womens-shoes"}>
        Women's Shoes
      </Category>
      <Category image={womensWatches} name={"womens-watches"}>
        Women's Watches
      </Category>
    </div>
  );
};

export default Categories;
