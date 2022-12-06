import React from "react";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import themes from "./styles/themes";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log('componentDidMount Executou');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info){
    console.log({error, info})
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  componentWillUnMount() {
    console.log('componente Desmontou');
  }

  render() {
    console.log('render')
    return (
      <ThemeProvider>
        <button onClick={() => this.setState({changed : true})}>Change State</button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
