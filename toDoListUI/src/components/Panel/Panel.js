import React from 'react'

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {itemMessage: 'ayy'}

    this.handleChange = this.handleChange.bind(this)
  }

  getInitialState() {
    return { itemMessage: 'fill me in fam'}
  }

  handleChange(e) {
    this.setState({
      itemMessage: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.state.itemMessage} <br />
        Enter your thingo: <input type="text" value={this.state.itemMessage} onChange={this.handleChange} />
      </div>
    )
  }
}
