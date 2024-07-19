import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook to access URL params

const BookDetails = () => {
  // Accessing productId from URL params
  const { productId } = useParams();

  // Assuming you fetch the product data based on productId
  // For simplicity, here we'll just use a static product object
  const product = {
    id: productId,
    name: 'Product Name',
    description: 'Product Description',
    price: 100,
    available: true,
    image: 'profile.jpg',
  };

  // Function to handle adding the product to cart
  const handleAddToCart = () => {
    // Implement your logic for adding the product to the cart
    console.log('Product added to cart:', product);
  };

  // Function to handle buying the product now
  const handleBuyNow = () => {
    // Implement your logic for buying the product immediately
    console.log('Buying product now:', product);
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px', maxHeight: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.available ? 'In stock' : 'Out of stock'}</p>

      {/* Button to add the product to cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Button to buy the product now */}
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default BookDetails;
