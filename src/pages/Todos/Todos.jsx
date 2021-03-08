import React from 'react';
import axios from 'axios';
import Select from './components/Select/Select';
import TodoList from './components/TodoList/TodoList';
import TodoCreator from './components/TodoCreator/TodoCreator';

import styles from './Todos.module.scss';
import TodoSearch from './components/TodoSearch/TodoSearch';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      activeUser: undefined,
      userTodos: [],
      searchText: ''
    }

    this.selectUser = this.selectUser.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.searchTodo = this.searchTodo.bind(this)
  }

  async componentDidMount() {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      users: users.data,
      activeUser: 1
    }, () => {
      this.getUserTodos(this.state.activeUser)
    })
  }

  async getUserTodos(id) {
    const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    this.setState({
      userTodos: todos.data
    })
  }

  selectUser(id) {
    this.setState({
      activeUser: id
    }, () => {
      this.getUserTodos(this.state.activeUser)
    })
  }

  addTodo(data) {
    this.setState({
      userTodos: [...this.state.userTodos, data]
    })
  }

  searchTodo(text) {
    this.setState({
      searchText: text
    })
  }

  render() {
    const { users, activeUser, userTodos, searchText } = this.state

    return (
      <div className={styles.Todos}>
        <div className={styles.controls}>
          <Select dataList={users} selectedOption={activeUser} onSelect={this.selectUser} />
          <TodoCreator currentUser={activeUser} onCreate={this.addTodo} />
          <TodoSearch onSearch={this.searchTodo} />
        </div>
        <TodoList dataList={userTodos} searchText={searchText} />
      </div>
    );
  }

}

export default Todos;