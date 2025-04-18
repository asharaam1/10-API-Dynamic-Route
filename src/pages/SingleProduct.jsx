import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleProduct = () => {
  const params = useParams();
  const [loading, error, data] = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  if (loading) {
    return (
      <div className="flex h-[90vh] justify-center items-center">
        <span className="loading loading-spinner loading-xl text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      
      {/* Product Title and Image */}
      <div>
        <div>
          <img src={data.thumbnail} alt="Essence Mascara Lash Princess" />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>
            ${data.price}{" "}
            <span>
              ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
            </span>
          </p>
          <p>Discount: {data.discountPercentage}% off</p>
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <p>
              ({data.rating} based on {data.reviews.length} reviews)
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div>
        <p>{data.description}</p>
      </div>

      {/* Product Availability & Shipping Info */}
      <div>
        <div>
          <span>Availability:</span>
          <span>
            {data.availabilityStatus} ({data.stock} left)
          </span>
        </div>
        <div>
          <span>Shipping Info:</span>
          <span>{data.shippingInformation}</span>
        </div>
        <div>
          <span>Min Order Quantity:</span>
          <span>{data.minimumOrderQuantity} units</span>
        </div>
        <div>
          <span>Return Policy:</span>
          <span>{data.returnPolicy}</span>
        </div>
      </div>

      {/* Warranty & Barcode */}
      <div>
        <div>
          <span>Warranty:</span>
          <span>{data.warrantyInformation}</span>
        </div>
        <div>
          <span>Barcode:</span>
          <img src={data.meta.qrCode} alt="QR Code" />
        </div>
      </div>

      {/* Add to Cart Button */}
      <div>
        <button
          className={
            data.availabilityStatus === "In Stock"
              ? "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              : "bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          }
        >
          Add to Cart
        </button>
        <span>SKU: {data.sku}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
