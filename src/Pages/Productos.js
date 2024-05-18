import React, { useState } from 'react';
import './Productos.js';

function Productos () {
  const [products, setProducts] = useState([
   
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const id = products.length + 1;
      const product = { id, ...newProduct };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '' });
      setShowAddForm(false);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleDeleteProduct = () => {
    setProducts(products.filter(product => product.id !== selectedProductId));
    setShowDeleteModal(false);
  };

  const openAddForm = () => {
    setShowAddForm(true);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  const openDeleteModal = (id) => {
    setSelectedProductId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="products-container">
      <h1>Productos</h1>
      <button onClick={openAddForm}>Agregar Producto</button>
      {showAddForm && (
        <div className="form-popup">
          <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input type="text" id="price" name="price" value={newProduct.price} onChange={handleInputChange} />
            </div>
            <button type="submit">Agregar Producto</button>
            <button onClick={closeAddForm}>Cancelar</button>
          </form>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Estás seguro de eliminar este producto?</h2>
            <div className="modal-buttons">
              <button onClick={handleDeleteProduct}>Sí, eliminar</button>
              <button onClick={closeDeleteModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      <ul className="products-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button onClick={() => openDeleteModal(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;