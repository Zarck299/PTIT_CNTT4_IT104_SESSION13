import { Component } from "react";

type State = {
  company: string;
};

export default class UpdateState extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      company: "Rikkei Academy"
    };
  }

  handleChange = () => {
    this.setState({ company: "Rikkei Soft" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Tên công ty: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}
