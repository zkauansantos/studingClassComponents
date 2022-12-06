import React from "react";
import PropTypes from 'prop-types'
import { Container } from "./styles";

export default class Header extends React.Component {
  static propTypes = {
    selectedTheme : PropTypes.string.isRequired,
    onToggleTheme : PropTypes.func.isRequired,
  };

  render() {
    const {onToggleTheme, selectedTheme} = this.props;

    return (
      <Container>
        <h1>React's Blog</h1>
        <button 
          onClick={onToggleTheme}
          type="button"
          >
          {selectedTheme === "dark" ? "🌞" : "🌑"}
        </button>
      </Container>
    );
  }
}

