import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar/NavigationBar';


export default function Dashboard() {

  return (
    <StyledContainer>
      <NavigationBar/>

      <Container>
        <Outlet />
      </Container>
    </StyledContainer>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  overflow-y: auto;
  display: flex;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px 10px;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  padding: 0;
  
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`