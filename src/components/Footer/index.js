import React from 'react';

import { Container } from './styles';

export default function Footer({onToggleTheme, selectedTheme}) {
  return (
    <Container>
      <span>React's Blog. Todos os direitos reservados.</span>
      <button onClick={onToggleTheme} type="button">
      {selectedTheme === 'dark' ? '🌞' : '🌑'}    
      </button>
    </Container>
  );
}