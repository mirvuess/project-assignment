# Book Review Application

## About the App
This is a dynamic web application that allows users to create, read, update, and delete book reviews. Users can share their thoughts about books, including details such as title, author, genre, and their personal review. The application is built using Express.js/Node.js and follows a proper MVC architecture.

## Features
- Create new book reviews with title, author, genre, and review text
- View all book reviews
- Update existing reviews
- Delete reviews
- Input validation and error handling
- Responsive and user-friendly interface

## Project Structure
```
/book-review-app
├── app.js                 # Main application file
├── package.json          # Project configuration and dependencies
├── .gitignore           # Git ignore file
├── /public              # Static files
│   ├── /images
│   ├── /javascripts
│   └── /styles
│       └── style.css
├── /routes              # Route definitions
│   ├── index.js
│   └── /books
│       └── index.js
├── /views               # Pug templates
│   ├── layout.pug
│   ├── index.pug
│   └── /books
│       ├── index.pug
│       ├── create.pug
│       ├── edit.pug
│       └── show.pug
├── /controllers         # Business logic
│   ├── index.js
│   └── /books
│       └── index.js
└── /services           # Service layer
    ├── index.js
    └── /books
        └── index.js
```

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd book-review-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the application:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Dependencies
- express: Web framework
- pug: Template engine
- mongoose: MongoDB ODM
- express-validator: Input validation
- dotenv: Environment variable management
- method-override: HTTP method override
- body-parser: Request body parsing

## Links
- GitHub Repository: [Your GitHub Repository URL]
- Live Application: [Your Deployed Application URL]

## Note
This web application was created to fulfill Web Technology module's requirements and does not represent an actual company or service. 