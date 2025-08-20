import {useState} from 'react'
type Task = {
    id: number,
    name: string,
    assign: string,
    status: boolean,
    created_at: Date
}
export default function ToDoList() {
    const [tasks] = useState<Task[]>([
    {
      id: 1,
      name: "Thiết kế giao diện Header",
      assign: "Nguyễn Văn A",
      status: false,
      created_at: new Date(),
    },
    {
      id: 2,
      name: "Thiết kế giao diện Footer",
      assign: "Nguyễn Văn B",
      status: true,
      created_at: new Date(),
    },
  ]);
  const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${
      (date.getMonth() + 1).toString().padStart(2, "0")
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  return (
    <div>
      <h2>Danh sách công việc</h2>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Người thực hiện</th>
            <th>Trạng thái</th>
            <th>Thời gian tạo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.assign}</td>
              <td>
                {task.status ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Hoàn thành</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>Chưa hoàn thành</span>
                )}
              </td>
              <td>{formatDate(task.created_at)}</td>
              <td>
                <button style={{ marginRight: "5px" }}>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
