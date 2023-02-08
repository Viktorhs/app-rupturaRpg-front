import styled from 'styled-components';

export default function NavigationButton({ active, children }) {
  return (
    <Button active={active}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props => props.active ? 'background-color: #FF6600;' : ''}

  &:hover {
    background-color: #FF6600;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 28px;
    color: #FFFFFF;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`;
