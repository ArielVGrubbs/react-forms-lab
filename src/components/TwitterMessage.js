import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingLength: 280
    };
  }

  handleChange = (event) => {
    let remLength = this.props.maxChars - event.target.value.length
    if (event.target.value.length <= this.props.maxChars) {
      this.setState({
        [event.target.name]: event.target.value,
        remainingLength: remLength
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <p>Remaining Characters: {this.state.remainingLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
