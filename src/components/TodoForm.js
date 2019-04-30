// classe para criar um componente de forma externa
import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      todo: '',
    };
    
  }

  onAdd = event => {
    event.preventDefault();
    const {todo} = this.state;
    if(todo){
      this.props.pushToItems(todo);
    }
  };

  // evento de mudança e insere os dados em todo
  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="todo"
          placeholder="enter to todo here"
          onChange={this.onChange}
        />
        <button type="button" onClick={this.onAdd}>
          Create
        </button>
      </div>
    );
  }
}
