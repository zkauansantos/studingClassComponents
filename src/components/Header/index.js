import React from "react";

import { Container } from "./styles";

export default class Header extends React.Component {
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

// export default function Header({onToggleTheme, selectedTheme}) {
//   return (
//     <Container>
//       <h1>React's Blog</h1>
//       <button onClick={onToggleTheme} type="button">
//         {selectedTheme === 'dark' ? '🌞' : '🌑'}
//       </button>
//     </Container>
//   );
// }
