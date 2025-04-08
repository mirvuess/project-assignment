const Book = require('../../models/Book');

// Get all books
exports.getAllBooks = async () => {
    return await Book.find().sort({ createdAt: -1 });
};

// Get book by ID
exports.getBookById = async (id) => {
    return await Book.findById(id);
};

// Create new book
exports.createBook = async (bookData) => {
    const book = new Book(bookData);
    return await book.save();
};

// Update book
exports.updateBook = async (id, bookData) => {
    return await Book.findByIdAndUpdate(id, bookData, {
        new: true,
        runValidators: true
    });
};

// Delete book
exports.deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
}; 