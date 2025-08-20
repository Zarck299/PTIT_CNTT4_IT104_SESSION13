import {Component} from 'react'
interface State {
    name: string
} 
export default class Exercise01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Vũ Hồng Anh"
    };
  }

  render() {
    return (
      <div>
        <h2>Họ và tên: {this.state.name}</h2>
      </div>
    );
  }
}