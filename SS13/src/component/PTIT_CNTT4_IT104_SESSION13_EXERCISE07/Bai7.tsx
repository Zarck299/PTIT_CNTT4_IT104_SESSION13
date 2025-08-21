import {useState} from 'react'

export default function Apps() {
    const [theme, setTheme] = useState<"dark" | "light">('light');
    const [language, setLanguage] = useState<"english" | "vietnamese">("vietnamese");

    const appStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        minHeight: "150px",
        border: "1px solid gray"
    }
    const themeText = theme === "light" ? "sáng" : "tối";
    const languageText = language === "english" ? "English" : "Tiếng Việt"
    return (
    <div style={appStyle}>
      <h2>Nền: {themeText}</h2>
      <h2>Ngôn ngữ: {languageText}</h2>

      {/* Nút đổi theme */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Đổi Theme
      </button>

      {/* Nút đổi language */}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          setLanguage(language === "english" ? "vietnamese" : "english")
        }
      >
        Đổi Ngôn ngữ
      </button>
    </div>
  )
}
