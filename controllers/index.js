// Home page controller
exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Book Review App' });
}; 