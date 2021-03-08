import React from 'react';
import styles from './Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { getDate } from '../../utils/utils';
import CardEditor from '../CardEditor/CardEditor';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdating: false
    }

    this.openEditor = this.openEditor.bind(this)
    this.closeEditor = this.closeEditor.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.plusRating = this.plusRating.bind(this)
    this.minusRating = this.minusRating.bind(this)
  }

  openEditor() {
    this.setState({
      isUpdating: true
    })
  }

  closeEditor() {
    this.setState({
      isUpdating: false
    })
  }

  updateCard(text = this.props.data.text, rating = this.props.data.rating) {
    this.props.updateCard(this.props.data.time, {text, rating})
    this.closeEditor()
  }

  plusRating() {
    this.updateCard(this.props.data.text, this.props.data.rating + 1)
  }

  minusRating() {
    this.updateCard(this.props.data.text, this.props.data.rating - 1)
  }

  render() {
    const { time, text, rating } = this.props.data
    const { updateCard } = this.props
    const { isUpdating } = this.state

    return (
      <div className={styles.Card}>
        <div className={styles.text}>
          {isUpdating
            ? <CardEditor
              value={text}
              onConfirm={this.updateCard}
              onCancel={this.closeEditor}
            />
            : text
          }
        </div>
        <div className={styles.controls}>
          <FontAwesomeIcon icon={faPencilAlt} onClick={this.openEditor} />
          <div className={styles.date}>
            {getDate(time)}
          </div>
          <div className={styles.rating}>
            <FontAwesomeIcon icon={faPlus} onClick={this.plusRating} />
            {rating}
            <FontAwesomeIcon icon={faMinus} onClick={this.minusRating} />
          </div>
        </div>
      </div>
    )
  }
}

export default Card;