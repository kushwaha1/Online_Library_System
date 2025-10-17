import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../utils/bookSlice";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../utils/categories";
import { ChevronDown } from "lucide-react";

const AddBooks = () => {
    // ------------------ State Hooks ------------------
    // Individual error messages for form fields
    const [titleError, setTitleError] = useState("");
    const [authorError, setAuthorError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [ratingError, setRatingError] = useState("");
    const [duplicateError, setDuplicateError] = useState(""); // for duplicate book validation
    const [generalError, setGeneralError] = useState(""); // general form error

    // Tracks if form is submitting to disable submit button
    const [submitting, setSubmitting] = useState(false);

    // Stores all book input values
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category_type: "",
        image: null,
        description: "",
        rating: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch existing books from Redux store for duplicate validation
    const existingBooks = useSelector((state) => state.book || []);

    // Filter out invalid or "All" categories for dropdown
    const visibleCategories = Array.isArray(categories)
        ? categories.filter((cat) => {
            if (!cat) return false;
            const name = (cat.category ?? "").toString();
            return name.trim().toLowerCase() !== "all";
        })
        : [];

    // ------------------ Validation Functions ------------------
    // Each function validates a single field and sets its corresponding error

    const validateTitle = (value) => {
        const trimmed = (value ?? "").toString().trim();
        if (!trimmed) {
            setTitleError("Title is required.");
            return false;
        }
        if (trimmed.length < 2) {
            setTitleError("Title must be at least 2 characters.");
            return false;
        }
        setTitleError("");
        return true;
    };

    const validateAuthor = (value) => {
        const trimmed = (value ?? "").toString().trim();
        if (!trimmed) {
            setAuthorError("Author is required.");
            return false;
        }
        if (trimmed.length < 2) {
            setAuthorError("Author name must be at least 2 characters.");
            return false;
        }
        setAuthorError("");
        return true;
    };

    const validateDuplicate = (title, author) => {
        // Checks if a book with same title & author already exists
        const isDuplicate = existingBooks.some(book =>
            book.title.toLowerCase().trim() === title.toLowerCase().trim() &&
            book.author.toLowerCase().trim() === author.toLowerCase().trim()
        );

        if (isDuplicate) {
            setDuplicateError("This book (same title and author) already exists in the library.");
            return false;
        }
        setDuplicateError("");
        return true;
    };

    const validateCategory = (value) => {
        if (!value || !value.toString().trim()) {
            setCategoryError("Please select a category.");
            return false;
        }
        setCategoryError("");
        return true;
    };

    const validateRating = (value) => {
        if (value === "" || value === null || isNaN(value)) {
            setRatingError("Rating is required.");
            return false;
        }
        const num = Number(value);
        if (num < 1 || num > 5) {
            setRatingError("Rating must be a number between 1 and 5.");
            return false;
        }
        setRatingError("");
        return true;
    };

    const validateImage = (file) => {
        if (!file) {
            setImageError("Image is required.");
            return false;
        }
        const allowed = ["image/jpeg", "image/jpg", "image/png"];
        if (!allowed.includes(file.type)) {
            setImageError("Image must be JPG, JPEG or PNG.");
            return false;
        }
        // Limit file size to 3MB
        const maxSize = 3 * 1024 * 1024;
        if (file.size > maxSize) {
            setImageError("Image size must be less than 3 MB.");
            return false;
        }
        setImageError("");
        return true;
    };

    const validateDescription = (value) => {
        const trimmed = (value ?? "").toString().trim();
        if (!trimmed) {
            setDescriptionError("Description is required.");
            return false;
        }
        if (trimmed.length < 10) {
            setDescriptionError("Description should be at least 10 characters.");
            return false;
        }
        setDescriptionError("");
        return true;
    };

    // ------------------ Event Handlers ------------------
    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "image" && files && files[0]) {
            // Handle file input separately
            const file = files[0];
            setBookData((prev) => ({ ...prev, image: file }));
            validateImage(file); // validate immediately
        } else {
            setBookData((prev) => ({ ...prev, [name]: value }));

            // Validate field on change for better UX
            if (name === "title") validateTitle(value);
            if (name === "author") validateAuthor(value);
            if (name === "category_type") validateCategory(value);
            if (name === "description") validateDescription(value);
            if (name === "rating") validateRating(value);

            // Clear duplicate error if user edits title/author
            if (name === "title" || name === "author") {
                setDuplicateError("");
            }
        }

        // Clear general form error on any change
        if (generalError) setGeneralError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Run all validations individually
        const title = validateTitle(bookData.title);
        const author = validateAuthor(bookData.author);
        const category = validateCategory(bookData.category_type);
        const image = validateImage(bookData.image);
        const desc = validateDescription(bookData.description);
        const rate = validateRating(bookData.rating);
        const duplicate = validateDuplicate(bookData.title, bookData.author);

        // Stop submission if any validation fails
        if (!title || !author || !category || !image || !desc || !rate || !duplicate) {
            setGeneralError("Please fix the errors above before submitting.");
            return;
        }

        setSubmitting(true);

        // Build new book object
        const newBook = {
            id: uuidv4(),
            title: bookData.title.trim(),
            author: bookData.author.trim(),
            category_type: bookData.category_type,
            description: bookData.description.trim(),
            image: URL.createObjectURL(bookData.image), // create preview URL
            rating: Number(bookData.rating),
            isNew: true,
            createdAt: new Date().toISOString(),
        };

        // Dispatch action to add book to Redux store
        dispatch(addBook(newBook));

        // Reset form fields
        setBookData({
            title: "",
            author: "",
            category_type: "",
            image: null,
            description: "",
        });
        setSubmitting(false);

        // Redirect to browse books page
        navigate("/browse-books");
    };

    // ------------------ JSX ------------------
    return (
        <div>
            <section
                id="addBooks"
                className="w-full max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-18"
            >
                <form
                    className="max-w-5xl mx-auto bg-amber-50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md mb-8">Add New Book</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Title Input */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-700">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={bookData.title}
                                onChange={handleChange}
                                onBlur={(e) => validateTitle(e.target.value)}
                                placeholder="Enter book title"
                                className={`w-full h-11 px-3 border border-amber-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm ${titleError ? "border-red-400" : ""
                                    }`}
                            />
                            {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
                        </div>

                        {/* Author Input */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-700">
                                Author <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={bookData.author}
                                onChange={handleChange}
                                onBlur={(e) => validateAuthor(e.target.value)}
                                placeholder="Enter author name"
                                className={`w-full h-11 px-3 border border-amber-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm ${authorError ? "border-red-400" : ""
                                    }`}
                            />
                            {authorError && <p className="text-red-500 text-sm mt-1">{authorError}</p>}
                        </div>

                        {/* Duplicate Error Message spans full width */}
                        {duplicateError && (
                            <div className="md:col-span-2">
                                <p className="text-red-500 text-sm font-semibold bg-red-50 border border-red-200 rounded-lg p-3">
                                    ⚠️ {duplicateError}
                                </p>
                            </div>
                        )}

                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-700">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="category_type"
                                    value={bookData.category_type}
                                    onChange={handleChange}
                                    onBlur={(e) => validateCategory(e.target.value)}
                                    className={`w-full h-11 px-3 pr-10 border border-amber-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm bg-amber-50 text-amber-800 appearance-none cursor-pointer ${categoryError ? "border-red-400" : ""}`}
                                >
                                    <option value="" disabled hidden>
                                        Select category
                                    </option>
                                    {visibleCategories.map((cat) => (
                                        <option
                                            key={cat.id}
                                            value={cat.category}
                                            className="bg-amber-100 text-amber-800 hover:bg-amber-200"
                                        >
                                            {cat.category}
                                        </option>
                                    ))}
                                </select>
                                {/* Dropdown arrow icon */}
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <ChevronDown size={20} className="text-amber-700" />
                                </div>
                            </div>
                            {categoryError && <p className="text-red-500 text-sm mt-1">{categoryError}</p>}
                        </div>

                        {/* Rating Input */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-700">
                                Rating <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                value={bookData.rating}
                                onChange={handleChange}
                                onBlur={(e) => validateRating(e.target.value)}
                                placeholder="Enter rating (1-5)"
                                className={`w-full h-11 px-3 border border-amber-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm ${ratingError ? "border-red-400" : ""}`}
                            />
                            {ratingError && <p className="text-red-500 text-sm mt-1">{ratingError}</p>}
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-2 text-amber-700">
                            Upload Image <span className="text-red-500">*</span>
                        </label>
                        <label className={`flex items-center justify-center w-full h-11 border-2 border-dashed border-amber-300 rounded-lg cursor-pointer hover:border-amber-500 transition ${imageError ? "border-red-400" : ""}`}>
                            <span className="text-sm text-gray-500">
                                {bookData.image ? bookData.image.name : "Choose file (JPG, JPEG, PNG)"}
                            </span>
                            <input
                                type="file"
                                name="image"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>
                        {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                    </div>

                    {/* Description Input */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-2 text-amber-700">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            onBlur={(e) => validateDescription(e.target.value)}
                            placeholder="Write a short description"
                            rows="4"
                            className={`w-full p-3 border border-amber-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm ${descriptionError ? "border-red-400" : ""}`}
                        />
                        {descriptionError && <p className="text-red-500 text-sm mt-1">{descriptionError}</p>}
                    </div>

                    {/* General Form Error */}
                    {(generalError || titleError || authorError || categoryError || imageError || descriptionError) && (
                        <p className="text-red-500 mt-3">{generalError || "Please resolve the highlighted errors."}</p>
                    )}

                    {/* Validation Note Section */}
                    <section id="note">
                        <div className="note text-sm text-yellow-800 bg-yellow-50 rounded-lg p-4 mt-4 space-y-1 border border-amber-300">
                            <p><strong>Applied Validation Rules:</strong></p>
                            <p>• <strong>Title:</strong> Required, min 2 chars.</p>
                            <p>• <strong>Author:</strong> Required, min 2 chars.</p>
                            <p>• <strong>Duplicate Check:</strong> No same title & author allowed.</p>
                            <p>• <strong>Category:</strong> Required dropdown selection.</p>
                            <p>• <strong>Rating:</strong> 1 to 5.</p>
                            <p>• <strong>Image:</strong> JPG/JPEG/PNG, max 3 MB.</p>
                            <p>• <strong>Description:</strong> Minimum 10 characters.</p>
                            <p className="mt-2 text-xs text-yellow-700"><em>All fields validated on change & blur. Empty/whitespace-only values not accepted.</em></p>
                        </div>
                    </section>

                    {/* Submit & Cancel Buttons */}
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
