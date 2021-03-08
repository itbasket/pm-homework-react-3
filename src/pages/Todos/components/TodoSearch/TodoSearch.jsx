import React, { useState, useEffect } from 'react';
import styles from './TodoSearch.module.scss';

const TodoSearch = ({ onSearch }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onSearch(value)
  }, [value])

  return (
    <div className={styles.TodoSearch}>
      <input type='text' placeholder='Search text in todos...' value={value} onChange={(event) => setValue(event.target.value)}/>
      <div className={styles.searchButton}>Search</div>
    </div>
  );
}

export default TodoSearch;

