import React from 'react';
import ReactDOM from 'react-dom';
// import PanelList from './components/PanelList/PanelList.js';
import CreateEntryField from './components/CreateEntryField/CreateEntryField.js'
import './index.css';

class ToDoList extends React.Component {
  render() {
    return (
      <CreateEntryField />
    )
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
