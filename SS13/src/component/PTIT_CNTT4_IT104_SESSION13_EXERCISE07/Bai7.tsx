import { Component } from "react";

type State = {
  theme: "dark" | "light";
  language: "english" | "vietnamese";
};

export default class Apps extends Component<{}, State> {
  state: State = {
    theme: "light",
    language: "vietnamese",
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
  };

  toggleLanguage = () => {
    this.setState({
      language: this.state.language === "english" ? "vietnamese" : "english",
    });
  };

  render() {
    const { theme, language } = this.state;
    const appStyle = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      padding: "20px",
      minHeight: "150px",
      border: "1px solid gray",
    };

    const themeText = theme === "light" ? "sáng" : "tối";
    const languageText = language === "english" ? "English" : "Tiếng Việt";

    return (
      <div style={appStyle}>
        <h2>Nền: {themeText}</h2>
        <h2>Ngôn ngữ: {languageText}</h2>

        {/* Nút đổi theme */}
        <button onClick={this.toggleTheme}>Đổi Theme</button>

        {/* Nút đổi language */}
        <button style={{ marginLeft: "10px" }} onClick={this.toggleLanguage}>
          Đổi Ngôn ngữ
        </button>
      </div>
    );
  }
}
