import React, { Component } from "react";

class Practice extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + " 님이 입장하셨습니다.");
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div>
        <h1>안녕 안녕</h1>
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={this.state.username}
          // value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default Practice;
