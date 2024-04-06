import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import Modal from "./Modal"; // Import your Modal component
import "./Products.css";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    category: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const createProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log('Product created:', data);
      // Refresh the product list after adding a new product
      fetchData();
      // Close the modal after adding the product
      setShowModal(false);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  // Function to handle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  return (
    <div>
      <h2 className="Category_title">Les Produits</h2>
      <Link to="/add-product">Add Product</Link> {/* Link to the AddProduct page */}

      <div className="Container">
        <div className="Row">
          {products.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image_url} // Access the image_url directly from the image object
                  price={product.price}
                  description={product.description}
                  category={product.category}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for adding a new product */}
      {showModal && (
        <Modal onClose={toggleModal}>
          {/* Content for adding a new product */}
          <h2>Ajouter un produit</h2>
          {/* Form for adding a new product */}
          <form onSubmit={createProduct}>
            <label htmlFor="productTitle">Title:</label>
            <input type="text" id="productTitle" name="title" value={newProduct.title} onChange={handleInputChange} />
            <label htmlFor="productPrice">Price:</label>
            <input type="number" id="productPrice" name="price" value={newProduct.price} onChange={handleInputChange} />
            <label htmlFor="productCategory">Category:</label>
            <input type="text" id="productCategory" name="category" value={newProduct.category} onChange={handleInputChange} />
            <button type="submit">Add Product</button>
          </form>
          <button onClick={toggleModal}>Cancel</button>
        </Modal>
      )}
    </div>
  );
};

export default CategoryComponent;
