import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';  

const CART_API_URL = 'https://fakestoreapi.com/carts'; 

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToCart = async (product) => {

  const payload = {
    userId: 1,
    date: new Date().toISOString(),
    products: [{ productId: product.id, quantity: 1 }]
  };

  const response = await axios.post(CART_API_URL, payload);
  return response.data;
};