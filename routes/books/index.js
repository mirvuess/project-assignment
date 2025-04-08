const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bookController = require('../../controllers/books');
const bookService = require('../../services/books');

// Validation middleware
const validateBook = [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('author').trim().notEmpty().withMessage('Author is required'),
    body('genre').trim().notEmpty().withMessage('Genre is required'),
    body('review').trim().notEmpty().withMessage('Review is required'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
];

// Get all books
router.get('/', bookController.getAllBooks);

// Show create form
router.get('/create', bookController.showCreateForm);

// Create new book review
router.post('/', validateBook, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('books/create', {
            title: 'Create New Review',
            book: req.body,
            errors: errors.array()
        });
    }

    try {
        await bookService.createBook(req.body);
        res.redirect('/books');
    } catch (err) {
        res.status(500).render('error', {
            title: 'Error',
            message: 'Error creating book review'
        });
    }
});

// Show edit form
router.get('/:id/edit', bookController.showEditForm);

// Update book review
router.put('/:id', validateBook, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('books/edit', {
            title: 'Edit Review',
            book: req.body,
            errors: errors.array()
        });
    }

    try {
        const book = await bookService.updateBook(req.params.id, req.body);
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
});

// Delete book review
router.delete('/:id', bookController.deleteBook);

// Show single book review
router.get('/:id', bookController.getBook);

module.exports = router; 