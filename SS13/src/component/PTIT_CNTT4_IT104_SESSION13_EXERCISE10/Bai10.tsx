import React, { Component } from 'react';

interface State {
  value: string;
}

export default class Input extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Dữ liệu</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Nhập vào đây..."
        />
        <p>Dữ liệu: {this.state.value}</p>
      </div>
    );
  }
}
