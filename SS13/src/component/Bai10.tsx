import React, {useState} from 'react'
export default function Input() {
    const [value, setValue] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
  return (
    <div>
      <h2>Dữ liệu</h2>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Nhập vào đây..." 
      />
      <p>Dữ liệu: {value}</p>
    </div>
  )
}
