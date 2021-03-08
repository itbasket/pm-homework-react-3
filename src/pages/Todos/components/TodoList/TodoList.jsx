import React from 'react';
import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ dataList, searchText }) => {
  const items = dataList ?? []

  return (
    <div className={styles.TodoList}>
      {items.map(item => {
        return <TodoItem data={item} searchText={searchText} key={item.id} />
      })}
    </div>
  );
}

export default TodoList;

