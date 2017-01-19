import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var ToDoList = React.createClass({
  getInitialState() {
    return {
      itemArray: []
    }
  },

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  },

  handleSubmit(e) {
    this.state.itemArray.push({
      text: this.state.item,
      key: Date.now()
    });

    this.setState({
      item: ''
    });

    e.preventDefault();
  },

  render() {
    var toDoEntries = this.state.itemArray;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = toDoEntries.map(createTasks);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='enter task' type='text' value={this.state.item} onChange={this.handleChange} />
          <button type='submit'>
            +
          </button>
        </form>
        <ul className='list'>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <div id='container'>
    <ToDoList />
  </div>,
  document.getElementById('root')
);
