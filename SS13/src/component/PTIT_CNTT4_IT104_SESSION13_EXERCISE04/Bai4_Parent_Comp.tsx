import {Component} from 'react'
import Children_Comp from "./Bai4_Children_Comp";
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
export { Parent_Comp as Bai4_Parent_Comp };