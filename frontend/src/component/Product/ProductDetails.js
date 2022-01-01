import React,{Fragment,useEffect} from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import {useSelector,useDispatch} from "react-redux";
import {
    clearErrors,
    getProductDetails,
    
  } from "../../actions/productAction";


import  ReactStars from "react-rating-stars-component";

import ReviewCard from "./ReviewCard.js";
import { Rating } from "@material-ui/lab";
import Loader from "../layout/Loader/Loader";


const ProductDetails =({match})=>{
const dispatch = useDispatch();

const {product,loading,error} = useSelector((state)=>state.ProductDetails);

 useEffect(() => {
     dispatch(getProductDetails(match.params.id));
 }, [dispatch,match.params.id]);

 const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };



    return (
       <Fragment> 
           {loading? <Loader/> :  <Fragment>
            <div className="ProductDetails" > 
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            
            </div>
            <div>

              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
            <h3 className="reviewsHeading">REVIEWS</h3>

            {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>}
       </Fragment>
    )
}