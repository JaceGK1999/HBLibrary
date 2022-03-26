import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail() {
  const id = 1; // TODO: Use id from route
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <div>
      <h3>
        Back to <NavLink to="/books">catalog</NavLink>
      </h3>
      <Book book={book} showDetail />;
    </div>
  );
}

export default BookDetail;
