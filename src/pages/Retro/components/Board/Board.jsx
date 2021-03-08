import React from 'react';
import styles from './Board.module.scss'
import Card from '../Card/Card';
import CardEditor from '../CardEditor/CardEditor';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isAdding: false
    }

    this.openEditor = this.openEditor.bind(this)
    this.closeEditor = this.closeEditor.bind(this)
    this.addCard = this.addCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
  }

  openEditor() {
    this.setState({
      isAdding: true
    })
  }

  closeEditor() {
    this.setState({
      isAdding: false
    })
  }

  addCard(text) {
    const time = Date.now()
    if (text) {
      this.setState({
        items: [...this.state.items,  {time, text, rating: 0}]
      })
    }
    this.closeEditor()
  }

  updateCard(time, card) {
    const newItems = this.state.items.map(item => {
      if (item.time === time) {
        return {time, ...card}
      }
      return item
    })
    this.setState({
      items: newItems
    })
  }

  render() {
    const { title, color } = this.props
    const { items, isAdding } = this.state

    return (
      <div className={`${styles.Board} ${styles[color]}`}>
        <h2>{title}</h2>
        {isAdding ?
          <CardEditor
            onConfirm={this.addCard}
            onCancel={this.closeEditor}
          />
          : <div className={styles.addButton} onClick={this.openEditor}>Write note</div>
        }
        {items
          .sort((a, b) => a.rating < b.rating ? 1 : -1)
          .map(item => {
            return (
              <Card
                data={item}
                updateCard={this.updateCard}
                key={item.time}
              />
            )
          })
        }
        Items: {this.state.items.length}
      </div>
    )
  }
}

export default Board;