import React from "react";
import { useLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingleBook = () => {
	const { _id, bookTitle, imageURL ,bookDescription} = useLoaderData();
	
  // Function to handle adding the product to cart
  const handleAddToCart = () => {
    // Implement your logic for adding the product to the cart
    // console.log('Product added to cart:', product);
	let temp={
		bookTitle:bookTitle,
		imageURL :imageURL ,
		bookDescription: bookDescription,
	}
		axios.post("http://localhost:5000/addtoCardadata", temp);
	
  };

   // Function to handle buying the product now
   const handleBuyNow = () => {
    // Implement your logic for buying the product immediately
    console.log('Buying product now:', product);
  };
	return (
		<div className='mt-28 px-4 lg:px-24 flex gap-5'>
			<img
				src={imageURL}
				alt=''
				className='h-100  '
			/>
			<div className="">
			<h1 className="text-9xl">{bookTitle}</h1>
			<h2 className="text-6xl">Description</h2>
			<h3 className="text-3xl">{bookDescription}</h3>
			  {/* Button to add the product to cart */}
			  <Button  color="blue" className="" onClick={handleAddToCart}>Add to Cart</Button>

{/* Button to buy the product now */}

<Button color="failure" onClick={handleBuyNow}>Buy Now</Button>

			</div>
 
    
		</div>
	);
};

export default SingleBook;
