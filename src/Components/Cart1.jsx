import React from 'react';
import { useCart } from '../Store/CartContext';

const Cart1 = () => {
  const { cartItems, getTotal } = useCart();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }}
              />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
                  ${item.price} × {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </p>
              </div>
            </div>
          ))}

          <div
            style={{
              textAlign: 'right',
              marginTop: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Total: ${getTotal().toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart1;

