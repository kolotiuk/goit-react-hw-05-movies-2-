import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputValue = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      alert('ERROR');
    }

    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputValue} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
