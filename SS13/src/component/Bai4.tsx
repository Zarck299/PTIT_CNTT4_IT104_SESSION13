import { Component } from "react";
class Children_Comp extends Component<{ name: string }> {
  render() {
    return (
      <div>
        <h3>Họ và tên bên component con: {this.props.name}</h3>
      </div>
    );
  }
}
export default class Parent_Comp extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Văn Nam",
    };
  }

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.name}</h2>
        {/* Gọi component con ngay trong cùng file */}
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}