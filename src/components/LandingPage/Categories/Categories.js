//components
import CategoryCard from "../CategoryCard/CategoryCard";

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
      <CategoryCard image={products} name={"products"}>
        All Products
      </CategoryCard>
      <CategoryCard image={automotive} name={"automotive"}>
        Automotive
      </CategoryCard>
      <CategoryCard image={fragrance} name={"fragrance"}>
        Fragrance
      </CategoryCard>
      <CategoryCard image={furniture} name={"furniture"}>
        Furniture
      </CategoryCard>
      <CategoryCard image={groceries} name={"groceries"}>
        Groceries
      </CategoryCard>
      <CategoryCard image={decorations} name={"home-decoration"}>
        Home Decorations
      </CategoryCard>
      <CategoryCard image={jewelry} name={"jewellery"}>
        Jewelry
      </CategoryCard>
      <CategoryCard image={laptop} name={"laptop"}>
        Laptop
      </CategoryCard>
      <CategoryCard image={lighting} name={"lighting"}>
        Lighting
      </CategoryCard>
      <CategoryCard image={mensShirts} name={"mens-shirts"}>
        Men's Shirts
      </CategoryCard>
      <CategoryCard image={mensShoes} name={"mens-shoes"}>
        Men's Shoes
      </CategoryCard>
      <CategoryCard image={mensWatches} name={"mens-watches"}>
        Men's Watches
      </CategoryCard>
      <CategoryCard image={motorcycle} name="motorcycle">
        Motorcycle
      </CategoryCard>
      <CategoryCard image={skinCare} name={"skin-care"}>
        Skin Care
      </CategoryCard>
      <CategoryCard image={smartPhone} name={"smartphones"}>
        Smartphones
      </CategoryCard>
      <CategoryCard image={sunglasses} name={"sunglasses"}>
        Sunglasses
      </CategoryCard>
      <CategoryCard image={tops} name={"tops"}>
        Tops
      </CategoryCard>
      <CategoryCard image={womensBags} name={"womens-bags"}>
        Women's Bags
      </CategoryCard>
      <CategoryCard image={womensDresses} name={"womens-dresses"}>
        Women's Dresses
      </CategoryCard>
      <CategoryCard image={womensShoes} name={"womens-shoes"}>
        Women's Shoes
      </CategoryCard>
      <CategoryCard image={womensWatches} name={"womens-watches"}>
        Women's Watches
      </CategoryCard>
    </div>
  );
};

export default Categories;
