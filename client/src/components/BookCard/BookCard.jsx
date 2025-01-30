import { Link } from "react-router-dom";
import "./BookCard.scss";

const BookCard = ({ book }) => {

  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150"; // Placeholder if no image is found

return (
    <div className="book-card">
        <img src={coverImage} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Author: {book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
        <p>Published: {book.first_publish_year || "Unknown Year"}</p>
        <Link to={`/book/${book.key.replace("/works/", "")}`}>View Details</Link>
    </div>
);
};

export default BookCard;
