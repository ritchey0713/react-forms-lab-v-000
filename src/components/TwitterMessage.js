import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message: ''
    };
  }

  handleChange(e) {
    const input = e.target.value
    this.setState({
      message: input

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="TwitterMessage"
        onChange={this.handleChange.bind(this)} />
        <p>Characters left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
