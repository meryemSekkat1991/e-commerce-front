import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="Product-card">
        <div className="Product-Img">
          <img src={product.image_url} alt={product.title} />
        </div>
        <div className="Product-Details">
          <h2>{product.title}</h2>
          <p id="Product-description">{product.description}</p>
          <p id="Product-price">${product.price}</p>
          <p id="Product-category">Category: {product.category}</p>
          <p id="Product-created-at">Created At: {formatDate(product.created_at)}</p>
          {/* Add more details as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
