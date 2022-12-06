import React, { useState, useMemo, useEffect, useRef } from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      theme: 'dark',
    }
  }

  render () {
    const {theme} = this.state
    
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
          <GlobalStyle />
          <Layout
            onToggleTheme= {() => {
                  this.setState(prevState => (
                    { theme: prevState.theme === 'dark' ? 'light' : 'dark' }
                  )
                )
              }
            }
            selectedTheme={theme}
          />
      </ThemeProvider>
    )
  }
}



// function App() {
//   const [theme, setTheme] = useState('dark');
//   const firstRender = useRef(true);


//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme () {
//     setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');  
//   };

//   useEffect(() => {
//     if(firstRender.current){
//       firstRender.current = false;
//       return;
//     }

//     console.debug({ theme })
//   }, [theme]);


//   return (

//   );
// };

export default App;
