import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { addToCart } from '../Utils/api';
import { useCart } from '../Store/CartContext';

const ProductCard = ({ product }) => {
     const [showFull, setShowFull] = useState(false);
  const toggleDescription = () => setShowFull(!showFull);

   const { addToCart } = useCart();

      const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      alert(` Added to cart: ${product.title}`);
      console.log('Cart response:', data);
    },
    onError: (error) => {
      alert(` Failed to add to cart: ${error.message}`);
    },
  });
   
    const handleAddToCart = () => {
 addToCart(product); 
  alert(`Added to cart: ${product.title}`);
  };

  const description = showFull
    ? product.description
    : `${product.description.slice(0, 100)}...`;

  return (
    <>
      <div style={{
      width: '250px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '10px' }}
      />
      <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{product.title}</h3>
      <p style={{ fontSize: '14px' }}>
        {description}
        {!showFull && (
          <span
            onClick={toggleDescription}
            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
          >
            Read more
          </span>
        )}
        {showFull && (
          <span
            onClick={toggleDescription}
            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
          >
            Show less
          </span>
        )}
      </p>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      <button 
        onClick={handleAddToCart}
        disabled={mutation.isLoading}
       style={{
        marginTop: 'auto',
        padding: '8px 12px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          {mutation.isLoading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
    </>
  )
}

export default ProductCard