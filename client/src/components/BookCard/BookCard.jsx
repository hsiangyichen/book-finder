import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "/placeholder.png"
        }
        alt={book.title}
        className="book-image"
      />
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">
          {book.author_name?.join(", ") || "Unknown Author"}
        </p>
        <p className="book-year">{book.first_publish_year || "N/A"}</p>
      </div>
    </div>
  );
};

export default BookCard;
