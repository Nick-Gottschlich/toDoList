import React from 'react';
import Panel from '../Panel/Panel.js';

export default class PanelList extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {numberOfPanels: 1};
  //
  //   // this.handleChange = this.handleChange.bind(this);
  // };

  render() {
    var panels = this.props.panels.map(panelMessage => {
      return <Panel itemMessage={panelMessage} key={panelMessage.id} />;
    });
    return (
      <ul className='panelList'>{panels}</ul>
    )
  };
};
