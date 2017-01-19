import React from 'react';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {itemMessage: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    this.setState({
      itemMessage: e.target.value
    });
  };

  handleClick() {
    console.log(this.state.itemMessage)
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.itemMessage} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          +
        </button>
      </div>
    )
  };
};
