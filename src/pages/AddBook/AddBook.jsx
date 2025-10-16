import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../utils/bookSlice";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../utils/categories"; // make sure path is correct

const AddBooks = () => {
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category_type: "", // stores selected category id
        image: null, // File object (kept for validation)
        description: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // visible categories (filter out "all")
    const visibleCategories = Array.isArray(categories)
        ? categories.filter((cat) => {
            if (!cat) return false;
            const name = (cat.category ?? "").toString();
            return name.trim().toLowerCase() !== "all";
        })
        : [];

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "image" && files && files[0]) {
            const file = files[0];
            // keep File object for validation if needed
            setBookData((prev) => ({ ...prev, image: file }));

            // // convert to base64 for preview & storage
            // const reader = new FileReader();
            // reader.onload = () => {
            //     const base64 = reader.result; // data:image/..;base64,...
            //     setPreview(base64);
            // };
            // reader.readAsDataURL(file);
        } else {
            setBookData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        if (error) setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, author, image, description, category_type } = bookData;

        if (!title.trim() || !author.trim() || !category_type || !image || !description.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        setSubmitting(true);

        // build book object: store category_type (id) and img as base64 (preview)
        const newBook = {
            id: uuidv4(),
            title: title.trim(),
            author: author.trim(),
            category_type: category_type, // only id
            description: description.trim(),
            image: URL.createObjectURL(image), // <<< changed: create usable preview URL
            isNew: true,
            createdAt: new Date().toISOString(),
        };


        // dispatch to redux
        dispatch(addBook(newBook));

        // reset
        setBookData({
            title: "",
            author: "",
            category_type: "",
            image: null,
            description: "",
        });
        setSubmitting(false);

        // navigate to browse-books page
        navigate("/browse-books");
    };

    return (
        <div>
            <section id='addBooks'
                className='w-full max-w-7xl mx-auto pt-32 pb-16
                px-4 sm:px-8 md:px-12 lg:px-8'
            >
                <form
                    className="max-w-2xl mx-auto bg-amber-50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Add New Book</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={bookData.title}
                                onChange={handleChange}
                                placeholder="Enter book title"
                                className="w-full h-11 px-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                            />
                        </div>

                        {/* Author */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={bookData.author}
                                onChange={handleChange}
                                placeholder="Enter author name"
                                className="w-full h-11 px-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Category</label>
                            <select
                                name="category_type"
                                value={bookData.category_type}
                                onChange={handleChange}
                                className="w-full h-11 px-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm bg-white"
                            >
                                <option value="">Select category</option>
                                {visibleCategories.map((cat) => (
                                    <option key={cat.id} value={cat.category}>
                                        {cat.category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Upload Image */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Image</label>
                            <label className="flex items-center justify-center w-full h-11 border-2 border-dashed rounded-lg cursor-pointer hover:border-amber-500 transition">
                                <span className="text-sm text-gray-500">
                                    {bookData.image ? bookData.image.name : "Choose file"}
                                </span>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            placeholder="Write a short description"
                            rows="4"
                            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                        />
                    </div>

                    {error && <p className="text-red-500 mt-3">{error}</p>}

                    {/* Buttons */}
                    <div className="flex items-center justify-between gap-4 mt-6">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-700 to-amber-500 text-white font-semibold shadow-lg transform hover:-translate-y-0.5 hover:shadow-amber-300/40 transition-all"
                        >
                            {submitting ? "Adding..." : "Add Book"}
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/browse-books")}
                            className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </section>
        </div>

    );
};

export default AddBooks;
