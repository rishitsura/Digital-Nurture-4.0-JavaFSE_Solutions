import React, { useState } from 'react';
import { books } from '../data/data';

const BookDetails = ({ showBooks = true }) => {
  const [priceFilter, setPriceFilter] = useState('all');
  const [selectedBook, setSelectedBook] = useState(null);

  const renderPriceCategory = (price) => {
    switch (true) {
      case price > 700:
        return <span className="price-high">Premium</span>;
      case price > 500:
        return <span className="price-medium">Standard</span>;
      default:
        return <span className="price-low">Budget</span>;
    }
  };

  const getFilteredBooks = () => {
    let filteredBooks = books;
    
    if (priceFilter === 'expensive') {
      filteredBooks = books.filter(book => book.price > 600);
    } else if (priceFilter === 'cheap') {
      filteredBooks = books.filter(book => book.price <= 600);
    }
    
    return filteredBooks;
  };

  const bookList = (() => {
    if (!showBooks) return <p>Books section is hidden</p>;
    
    return getFilteredBooks().map((book) => (
      <div key={book.id} className="book-item">
        <h3>{book.bname}</h3>
        <h4>${book.price}</h4>
        {renderPriceCategory(book.price)}
        <button onClick={() => setSelectedBook(book)}>
          View Details
        </button>
      </div>
    ));
  })();

  return (
    <div className="book-details">
      <h2>Book Details</h2>

      <div className={`filter-section ${showBooks ? 'visible' : 'hidden'}`}>
        <label>Filter by price: </label>
        <select 
          value={priceFilter} 
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Books</option>
          <option value="expensive">Expensive (&gt;$600)</option>
          <option value="cheap">Budget (≤$600)</option>
        </select>
      </div>

      {bookList}

      {selectedBook ? (
        <div className="book-modal">
          <h4>Book Details</h4>
          <p><strong>Title:</strong> {selectedBook.bname}</p>
          <p><strong>Price:</strong> ${selectedBook.price}</p>
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      ) : null}
    </div>
  );
};

export default BookDetails;
