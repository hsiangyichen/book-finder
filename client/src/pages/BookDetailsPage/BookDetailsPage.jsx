import "./BookDetailsPage.scss";
import { useParams } from "react-router-dom";
import booksData from "../../data/books";

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found!</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <img src={book.cover} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailsPage;
