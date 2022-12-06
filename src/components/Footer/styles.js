import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({theme}) => theme.headerAndFooterBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.large};
  border-radius: ${({theme}) => theme.borderRadius };
  justify-content: space-between;
  margin-top: ${({theme}) => theme.spacing.large};

  button {
    font-size: ${({theme}) => theme.spacing.medium};
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
