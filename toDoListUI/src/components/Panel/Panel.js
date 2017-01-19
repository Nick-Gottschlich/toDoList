import React from 'react';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {itemMessage: ''};

    this.props = {
      itemMessage: '',
      key: 1
    };

    // this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({
      itemMessage: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.itemMessage} /* onChange={this.handleChange} */ />
      </div>
    )
  };
};
