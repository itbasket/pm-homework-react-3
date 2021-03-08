import React from 'react';
import classNames from 'classnames'
import withTodoItem from '../../enchancers/withTodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './TodoItem.module.scss';

const TodoItem = ({ data, searchText, onComplete }) => {
  const title = data.title.includes(searchText)
    ? data.title.replace(searchText, `<span>${searchText}</span>`)
    : data.title

  return (
    <div className={classNames(styles.TodoItem, { [styles.completed]: data.completed})}>
      <div className={styles.idBlock}>{data.id}</div>
      <div className={styles.titleBlock} dangerouslySetInnerHTML={{__html: title}}></div>
      <div className={styles.completeBlock}>
        {!data.completed
          ? <FontAwesomeIcon icon={faTimesCircle} onClick={() => onComplete(data.id)} />
          : ''
        }
      </div>
    </div>
  );
}

export default withTodoItem(TodoItem);

