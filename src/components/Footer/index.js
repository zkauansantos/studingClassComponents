import React, {useContext} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import { Container } from './styles';

export default function Footer() {

  const { theme : selectedTheme , handleToggleTheme : onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>React's Blog. Todos os direitos reservados.</span>
      <button onClick={onToggleTheme} type="button">
      {selectedTheme === 'dark' ? '🌞' : '🌑'}    
      </button>
    </Container>
  );
}