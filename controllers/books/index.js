const Book = require('../../models/Book');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.render('books/index', { 
            title: 'All Books',
            books 
        });
    } catch (err) {
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Error fetching books'
        });
    }
};

// Show create form
exports.showCreateForm = (req, res) => {
    res.render('books/create', { 
        title: 'Create New Review',
        book: {}
    });
};

// Create new book review
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.redirect('/books');
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error creating book review'
        });
    }
};

// Show edit form
exports.showEditForm = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).render('error', {
                title: 'Not Found',
                message: 'Book review not found'
            });
        }
        res.render('books/edit', {
            title: 'Edit Review',
            book
        });
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error fetching book review'
        });
    }
};

// Update book review
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!book) {
            return res.status(404).render('error', {
                title: 'Not Found',
                message: 'Book review not found'
            });
        }
        res.redirect('/books');
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error updating book review'
        });
    }
};

// Delete book review
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).render('error', {
                title: 'Not Found',
                message: 'Book review not found'
            });
        }
        res.redirect('/books');
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error deleting book review'
        });
    }
};

// Show single book review
exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).render('error', {
                title: 'Not Found',
                message: 'Book review not found'
            });
        }
        res.render('books/show', {
            title: book.title,
            book
        });
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error fetching book review'
        });
    }
}; 