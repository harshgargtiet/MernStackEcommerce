import React, { Fragment} from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";

const product =
{
    name:"Blue tshirt",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price: "Rs3000",
    _id : "harsh",
};
const Home = () => {

  return (
    <Fragment>
     
 <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
         
          </div>
        </Fragment>
   
  );
};

export default Home;