import React from 'react';
import styles from './CardEditor.module.scss'

class CardEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value ?? ''
    }

    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { onConfirm, onCancel } = this.props
    const { value } = this.state

    return (
      <div className={styles.CardEditor}>
        <div className={styles.editor}>
          <textarea cols="50" rows="7" defaultValue={this.props.value} onKeyUp={this.changeValue} />
        </div>

        <div className={styles.controls}>
          <div className={[styles.button, styles.confirmButton].join(' ')} onClick={() => onConfirm(value)}>Confirm</div>
          <div className={[styles.button, styles.cancelButton].join(' ')} onClick={onCancel}>Cancel</div>
        </div>
      </div>
    )
  }
}

export default CardEditor;