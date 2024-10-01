import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header";
import './styles/main.css'
import banner from "./assets/banner.svg"
import Section from "./components/Section";
import {ProductProps} from "./components/Product";

import image1 from "./assets/ProductsImages/g92-2-500x500 1.png"
import image2 from "./assets/ProductsImages/ak-900-01-500x500 1.png"
import image3 from "./assets/ProductsImages/g27cq4-500x500 1.png"
import image4 from "./assets/ProductsImages/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
import {CategoryProps} from "./components/Category";

const sectionFreshSalesProducts: ProductProps[] = [
    {
        name: "Smartphone X10",
        price: 999.99,
        image: image1,
        isDiscount: true,
        discountPercentage: 10,
        discountPrice: 899.99,
        isNew: true,
        stars: 4.5,
        colors: ["Black", "Silver", "Blue"],
        numberOfReviews: 1523
    },
    {
        name: "Wireless Headphones Pro",
        price: 299.99,
        image: image2,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: false,
        stars: 4.8,
        colors: ["White", "Black"],
        numberOfReviews: 732
    },
    {
        name: "Smartwatch Series 5",
        price: 499.99,
        image: image3,
        isDiscount: true,
        discountPercentage: 15,
        discountPrice: 424.99,
        isNew: true,
        stars: 4.3,
        colors: ["Gold", "Silver", "Black"],
        numberOfReviews: 890
    },
    {
        name: "4K Ultra HD TV",
        price: 1499.99,
        image: image4,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: true,
        stars: 4.7,
        colors: ["Black", "Gray"],
        numberOfReviews: 2005
    }
];
const sectionExploreProducts: ProductProps[] = [
    {
        name: "Smartphone X10",
        price: 999.99,
        image: image1,
        isDiscount: true,
        discountPercentage: 10,
        discountPrice: 899.99,
        isNew: true,
        stars: 4.5,
        colors: ["Black", "Silver", "Blue"],
        numberOfReviews: 1523
    },
    {
        name: "Wireless Headphones Pro",
        price: 299.99,
        image: image2,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: false,
        stars: 4.8,
        colors: ["White", "Black"],
        numberOfReviews: 732
    },
    {
        name: "Smartwatch Series 5",
        price: 499.99,
        image: image3,
        isDiscount: true,
        discountPercentage: 15,
        discountPrice: 424.99,
        isNew: true,
        stars: 4.3,
        colors: ["Gold", "Silver", "Black"],
        numberOfReviews: 890
    },
    {
        name: "4K Ultra HD TV",
        price: 1499.99,
        image: image4,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: true,
        stars: 4.7,
        colors: ["Black", "Gray"],
        numberOfReviews: 2005
    },
    {
        name: "Smartphone X10",
        price: 999.99,
        image: image1,
        isDiscount: true,
        discountPercentage: 10,
        discountPrice: 899.99,
        isNew: true,
        stars: 4.5,
        colors: ["Black", "Silver", "Blue"],
        numberOfReviews: 1523
    },
    {
        name: "Wireless Headphones Pro",
        price: 299.99,
        image: image2,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: false,
        stars: 4.8,
        colors: ["White", "Black"],
        numberOfReviews: 732
    },
    {
        name: "Smartwatch Series 5",
        price: 499.99,
        image: image3,
        isDiscount: true,
        discountPercentage: 15,
        discountPrice: 424.99,
        isNew: true,
        stars: 4.3,
        colors: ["Gold", "Silver", "Black"],
        numberOfReviews: 890
    },
    {
        name: "4K Ultra HD TV",
        price: 1499.99,
        image: image4,
        isDiscount: false,
        discountPercentage: null,
        discountPrice: null,
        isNew: true,
        stars: 4.7,
        colors: ["Black", "Gray"],
        numberOfReviews: 2005
    }
];

const sectionCategorias: CategoryProps[] = [
    {title:"categoria", img:""},
    {title:"categoria", img:""},
    {title:"categoria", img:""},
    {title:"categoria", img:""},
    {title:"categoria", img:""}
]


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <img src={banner} alt={"banner"}/>
      <Section subtitle={"Today's"} title={"Fresh Sales"}
               listProducts={sectionFreshSalesProducts} listCategories={[]}
               viewMoreTop={false} viewMoreBotton={true} timer={true}>
      </Section>
      <Section subtitle={"Categories"} title={"Browse By Category"}
               listProducts={[]} listCategories={sectionCategorias}
               viewMoreTop={false} viewMoreBotton={false} timer={false}>
      </Section>
      <Section subtitle={"This Month"} title={"Best Selling Products"}
               listProducts={sectionFreshSalesProducts} listCategories={[]}
               viewMoreTop={true} viewMoreBotton={false} timer={false}>
      </Section>
      <Section subtitle={"Our Products"} title={"Explore Our Products"}
               listProducts={sectionExploreProducts} listCategories={[]}
               viewMoreTop={false} viewMoreBotton={true} timer={false}>
      </Section>

  </StrictMode>,
)
