import {useState} from 'react'

export default function UpdateState() {
    const [company, setCompany] = useState("Rikkei Academy");
    const handleChange = () =>{
        setCompany("Rikkei Soft");
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tên công ty: {company}</h2>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}
