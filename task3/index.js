const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];


app.get("/books", (req, res) => {
  res.json(books);
});


app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});


app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});


app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) return res.status(404).json({ error: "Book not found" });

  const removedBook = books.splice(index, 1);
  res.json(removedBook[0]);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
