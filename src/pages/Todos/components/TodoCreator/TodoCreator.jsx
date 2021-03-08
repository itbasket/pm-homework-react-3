import React, { useState, useRef } from 'react';
import styles from './TodoCreator.module.scss';
import axios from 'axios';

const TodoCreator = ({ currentUser, onCreate }) => {
  const [value, setValue] = useState('')

  const inputRef = useRef(null);

  const createTodo = async () => {
    if (currentUser && value) {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/todos/`,
        {
          title: value,
          userId: currentUser
        })

      if (response.status === 201) {
        onCreate({...response.data, completed: false})
      }
    }

    setValue('')
    inputRef.current.focus()
  }

  return (
    <div className={styles.TodoCreator}>
      <input type='text' placeholder='Type new todo here...' ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)}/>
      <div className={styles.addButton} onClick={createTodo}>Add</div>
    </div>
  );
}

export default TodoCreator;

