import {Component} from 'react'
interface User {
    id: number,
    name: string,
    address: string
} 
interface State {
    users : User[]
}
export default class Exercise03 extends Component<{}, State, User> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Nguyễn Văn A", address: "Hà Nội" },
        { id: 2, name: "Trần Thị B", address: "Đà Nẵng" },
        { id: 3, name: "Lê Văn C", address: "TP. Hồ Chí Minh" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}