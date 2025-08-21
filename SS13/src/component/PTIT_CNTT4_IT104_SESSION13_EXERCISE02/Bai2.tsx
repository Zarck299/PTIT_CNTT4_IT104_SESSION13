import {Component} from 'react'
interface State {
    id: number,
    name: string,
    birthday: string,
    address: string
} 
export default class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,  
      name: "Vũ Hồng Anh",
      birthday: "11/09/2006",
      address: "Nam Tu Liem, Ha Noi"
    };
  }

  render() {
    return (
      <div>
        <h2>Thông tin cá nhân: </h2>
        <p>Id: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    );
  }
}