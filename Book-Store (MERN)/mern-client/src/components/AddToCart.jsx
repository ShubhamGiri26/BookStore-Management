import React, { useState } from 'react';
import { Table } from 'flowbite-react';

const AddToCart = ({ book }) => {
  const [quantity, setQuantity,allBooks] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const [allBooks, setAllBooks] = useState([]);
	{console.log("data")}
	useEffect( () => {
		{console.log("h1")}
		fetch("http://localhost:5000/Addedbook")
			.then((res) => res.json())
			.then((data) => setAllBooks(data));
			
	}, []);

    // Send data to Database
		fetch("http://localhost:5000/Addedbook", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(bookObj),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Book Uploaded Successfully!");
				form.reset();
			});
    console.log(`Added ${quantity} ${book.title} to cart`);
  };

  return (
    <div className='px-4 my-12'>
			<h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

			{/* Table for book data */}
			<Table className='lg:w-[1180px]'>
				<Table.Head>
					<Table.HeadCell>No.</Table.HeadCell>
					<Table.HeadCell>Book Name</Table.HeadCell>
					<Table.HeadCell>Author Name</Table.HeadCell>
					<Table.HeadCell>Category</Table.HeadCell>
					<Table.HeadCell>Prices</Table.HeadCell>
					<Table.HeadCell>Edit or Manage</Table.HeadCell>
				</Table.Head>

				{allBooks.map((book, index) => (
					<Table.Body
						className='divide-y'
						key={book._id}
					>
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{index + 1}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{book.bookTitle}
							</Table.Cell>
							<Table.Cell>{book.authorName}</Table.Cell>
							<Table.Cell>{book.category}</Table.Cell>
							<Table.Cell>$10.00</Table.Cell>
							<Table.Cell>
								<Link
									to={`/admin/dashboard/edit-books/${book._id}`}
									className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5'
								>
									Edit
								</Link>
								<button
									onClick={() => handleDelete(book._id)}
									className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 '
								>
									Delete
								</button>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
		</div>
  
  );
};



// import React from "react";

// const AddToCart =() => {
//     return <div>
//         <h1>hello</h1>
//     </div>
// }

export default AddToCart;