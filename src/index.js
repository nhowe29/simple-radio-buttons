import React from 'react';
import ReactDOM from 'react-dom';
import {Radio, RadioGroup} from "./SimpleRadioButtons.js"

let App = React.createClass({
  getInitialState() {
    return {selectedValue: 'Trumpet'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="instruments"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}
        valueNameDictionary={new Array(["0","Trumpet"],["1", "Drum"], ["2","Guitar"])}>
      </RadioGroup>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));