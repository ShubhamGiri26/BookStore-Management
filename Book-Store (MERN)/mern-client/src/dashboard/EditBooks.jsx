import React, { useState } from "react";
import {
	Button,
	Checkbox,
	Label,
	Select,
	TextInput,
	Textarea,
} from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
	const { id } = useParams();
	const {
		bookTitle,
		authorName,
		imageURL,
		category,
		bookDescription,
		bookPDFURL,
	} = useLoaderData();

	const bookCategories = [
		"Fiction",
		"Non-Fiction",
		"Mystery",
		"Programming",
		"Science Fiction",
		"Fantasy",
		"Horror",
		"Bibliography",
		"Autobiography",
		"History",
		"Self-help",
		"Memoir",
		"Business",
		"Children Books",
		"Travel",
		"Religion",
		"Art and Design",
	];

	const [selectedBookCategory, setSelectedBookCategory] = useState(
		bookCategories[0]
	);

	// Handle Category Selection
	const handleChangeSelectedValue = (event) => {
		console.log(event.target.value);
		setSelectedBookCategory(event.target.value);
	};

	// Handle Book Submission
	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;

		const bookTitle = form.bookTitle.value;
		const authorName = form.authorName.value;
		const imageURL = form.imageURL.value;
		const category = form.categoryName.value;
		const bookDescription = form.bookDescription.value;
		const bookPDFURL = form.bookPDFURL.value;

		const updatedBookObj = {
			bookTitle,
			authorName,
			imageURL,
			category,
			bookDescription,
			bookPDFURL,
		};
		// console.log(bookObj);

		// Update Book Data
		fetch(`http://localhost:5000/book/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedBookObj),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Book Updated Successfully");
				// form.reset();
			});
	};

	return (
		<div className='px-4 my-12'>
			<h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

			<form
				onSubmit={handleUpdate}
				className='flex lg:w-[1180px] flex-col flex-wrap gap-4'
			>
				{/* First Row */}
				<div className='flex gap-8'>
					{/* Book Name */}
					<div className='lg:w-1/2'>
						<div className='mb-2 block'>
							<Label
								htmlFor='bookTitle'
								value='Enter Book Title'
							/>
						</div>
						<TextInput
							id='bookTitle'
							name='bookTitle'
							type='text'
							placeholder='Book Name'
							defaultValue={bookTitle}
							required
						/>
					</div>

					{/* Author Name */}
					<div className='lg:w-1/2'>
						<div className='mb-2 block'>
							<Label
								htmlFor='authorName'
								value='Enter Author Name'
							/>
						</div>
						<TextInput
							id='authorName'
							name='authorName'
							type='text'
							placeholder='Author Name'
							defaultValue={authorName}
							required
						/>
					</div>
				</div>


				{/* Second Row */}
				<div className='flex gap-8'>
					{/* Image URL */}
					<div className='lg:w-1/2'>
						<div className='mb-2 block'>
							<Label
								htmlFor='imageURL'
								value='Enter Book Image URL '
							/>
						</div>
						<TextInput
							id='imageURL'
							name='imageURL'
							type='text'
							placeholder='Book Image URL'
							defaultValue={imageURL}
							required
						/>
					</div>

					{/* Category */}
					<div className='lg:w-1/2'>
						<div className='mb-2 block'>
							<Label
								htmlFor='inputState'
								value='Enter Book Category'
							/>
						</div>
						<Select
							id='inputState'
							name='categoryName'
							className='w-full rounded'
							value={selectedBookCategory}
							onChange={handleChangeSelectedValue}
						>
							{bookCategories.map((option) => (
								<option
									key={option}
									value={option}
								>
									{option}
								</option>
							))}
						</Select>
					</div>
				</div>

				{/* Third Row :Book Description */}
				<div>
					<div className='mb-2 block'>
						<Label
							htmlFor='bookDescription'
							value='Enter Book Description'
						/>
					</div>
					<Textarea
						className='w-full'
						id='bookDescription'
						name='bookDescription'
						placeholder='Write Book Description...'
						defaultValue={bookDescription}
						required
						rows={6}
					/>
				</div>

				{/* Fourth Row : Book PDF Link */}
				<div>
					<div className='mb-2 block'>
						<Label
							htmlFor='bookPDFURL'
							value='Enter Book PDF URL'
						/>
					</div>
					<TextInput
						id='bookPDFURL'
						name='bookPDFURL'
						type='text'
						placeholder='Book PDF URL'
						defaultValue={bookPDFURL}
						required
					/>
				</div>

				{/* Submit Button */}
				<Button
					type='submit'
					className='mt-5'
				>
					Update Book
				</Button>
			</form>
		</div>
	);
};

export default EditBooks;
