// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookDetails = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
//                 setBook(response.data);
//             } catch (error) {
//                 console.error("Error fetching book details", error);
//             }
//         };
//         fetchBook();
//     }, [id]);

//     return (
//         <div>
//             {book ? (
//                 <>
//                     <h2>{book.title}</h2>
//                     <p>{book.description ? book.description.value || book.description : "No description available"}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default BookDetails;