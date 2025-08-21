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
export default Children_Comp;