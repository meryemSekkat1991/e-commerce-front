import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    old_price: '',
    description: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setNewProduct({
      ...newProduct,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('product[title]', newProduct.title);
      formData.append('product[price]', newProduct.price);
      formData.append('product[old_price]', newProduct.old_price);
      formData.append('product[description]', newProduct.description);
      formData.append('product[category]', newProduct.category);
      formData.append('product[image]', newProduct.image);

      const response = await axios.post('http://localhost:3000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('New Product:', response.data);
      setNewProduct({
        title: '',
        price: '',
        old_price: '',
        description: '',
        category: '',
        image: null
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };



  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={newProduct.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={newProduct.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="old_price">Old Price:</label>
          <input type="number" id="old_price" name="old_price" value={newProduct.old_price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={newProduct.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={newProduct.category} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
