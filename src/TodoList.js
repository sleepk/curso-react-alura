import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todo: '',
    }
  }

  pushToItems = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todo],
      todo: ''
    })
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }


  render() {
    const { items } = this.state;
    return (
      <div>
        <input type="text" name="todo" placeholder="enter to todo here" onChange={this.onChange}></input>
        <button type="button" onClick={this.pushToItems}>Create</button>
        <hr />
        <ul>
          {items.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
//https://reactarmory.com/guides/react-events-cheatsheet
export default TodoList;
