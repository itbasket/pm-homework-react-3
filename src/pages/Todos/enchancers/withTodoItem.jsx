import React from 'react';
import axios from 'axios';

const withTodoItem = (Component) => {
  class withTodoItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isCompleted: this.props.data.completed
      }

      this.completeTodo = this.completeTodo.bind(this)
    }

    async completeTodo(id) {
      const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        {
        completed: true
      })

      if (response.status === 200) {
        this.setState({
          isCompleted: true
        })
      }
    }

    render()  {
      const { isCompleted } = this.state
      const newProps = {...this.props.data, completed: isCompleted}

      return <Component {...this.props} data={newProps} onComplete={this.completeTodo} />
    }
  }

  return withTodoItem;
}

export default withTodoItem;