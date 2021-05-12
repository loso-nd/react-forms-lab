import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.maxChars
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      characters: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <strong>{this.state.characters}</strong>
        <input onChange={event => this.handleChange(event)}
        type="text" name="message" id="message" value={this.state.characters}/>
      </div>
    );
  }
}

export default TwitterMessage;
