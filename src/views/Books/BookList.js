import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBooks } from '../../services/books';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading books...</h1>;

  return (
    <div>
      <p>
        Return to <NavLink to={'/'}>home</NavLink>
      </p>
      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
