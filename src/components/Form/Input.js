import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: null
     }
  }
  render() { 
    let { type, placeholder, value, onChange } = this.props; 
    return (
      <input
        className="form-control"
        type= {type}
        placeholder={placeholder}
        value={this.state.value || value}
        onChange={e => {
          const {
            target: { value }
          } = e;
          this.setState({ value });
          onChange && onChange(e);
        }}
      />
    );
  }
}
 
export default Input;
/*

Here you can create your controlled and uncontrolled Input.

Hints:
- To make this component uncontrolled from the outer components the state should be managed internally somewhere in this component.
- To make this component controlled it should receive a prop with the value to display in the input. 
- If the Input receives the value prop then it should be controlled, if it doesn't receive the value prop then it should be uncontrolled.
- You can add the class form-control to your Input to encapsulate the style. This way you can use 
  <Input value={someValue} onChange={handleChange} /> and the style becomes an implementation detail of Input

*/
