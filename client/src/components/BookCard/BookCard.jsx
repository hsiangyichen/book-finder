import { Link } from "react-router-dom";
import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      {/* <img src={book.cover} alt={book.title} /> */}
      <h3>{book.title}</h3>
      <p>By {book.author_name}</p>
      <p>Published: {book.first_publish_year}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
