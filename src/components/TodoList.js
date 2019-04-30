import React, { Component } from 'react';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todo: '',
    };
  }

  // faz que os itens sejam inseridos no array
  pushToItems = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todo],
      todo: '',
    });
  };
  // evento de mudança e insere os dados em todo
  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  handler(event) {
    alert(`
      key: ${event.key}
      keyCode: ${event.keyCode}
      altKey: ${event.altKey}
      ctrlKey: ${event.ctrlKey}
      metaKey: ${event.metaKey}
      shiftKey: ${event.shiftKey}
    `);
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <input
          type="text"
          name="todo"
          placeholder="enter to todo here"
          onChange={this.onChange}
        />
        <button type="button" onClick={this.pushToItems}>
          Create
        </button>
        <TodoForm/>
        <hr />
        <ul>
          {items.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <input
          placeholder="Hit a key..."
          onKeyDown={this.handler}
          onKeyPress={this.handler}
          onKeyUp={this.handler}
        />
      </div>
    );
  }
}
//https://reactarmory.com/guides/react-events-cheatsheet
export default TodoList;
