import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { images } from "../assets/images/index.js";
import RelatedProducts from "../components/products/RelatedProducts";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={images.star_icon} alt="" className="w-3 5" />
            <img src={images.star_icon} alt="" className="w-3 5" />
            <img src={images.star_icon} alt="" className="w-3 5" />
            <img src={images.star_icon} alt="" className="w-3 5" />
            <img src={images.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(144)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original produce</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (144)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus
            mollitia praesentium nobis optio nihil aperiam, vero enim corrupti
            doloribus molestiae? Ratione neque, aut dolore repellendus, quis et
            earum dolorem illum nemo nostrum aliquid molestiae perspiciatis
            omnis ad impedit laudantium est, magni porro? Accusamus cum, in sunt
            suscipit laudantium corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            exercitationem saepe facere obcaecati animi possimus. Iusto nisi,
            illum corrupti dolorem, maxime at ex rem saepe, dignissimos fugiat
            harum exercitationem suscipit!
          </p>
        </div>
      </div>

      {/* You may also like */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default ProductDetailsPage;