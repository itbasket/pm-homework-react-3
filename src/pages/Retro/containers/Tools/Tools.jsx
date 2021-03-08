import React from 'react'
import Board from '../../components/Board/Board'
import styles from './Tools.module.scss'

const boards = [
  {id: 1, title: 'Good things', color: 'green'},
  {id: 2, title: 'Bad things', color: 'red'},
  {id: 3, title: 'Action items', color: 'yellow'}
  ]

class Tools extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Tools}>
        {boards.map(board => {
          return (
            <Board
              title={board.title}
              color={board.color}
              key={board.id}
            />
          )
        })}
      </div>
    )
  }
}

export default Tools;