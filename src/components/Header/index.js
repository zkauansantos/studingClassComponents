import React from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Header extends React.Component {
  render() {

    return (
        <ThemeContext.Consumer>
          {({handleToggleTheme, theme : selectedTheme }) => (
            <Container>
              <h1>React's Blog</h1>
              <button 
                type="button"
                onClick={handleToggleTheme}
                >
                {selectedTheme  === "dark" ? "🌞" : "🌑"}
              </button>
           </Container>
          )}
        </ThemeContext.Consumer>
    );
  }
}

