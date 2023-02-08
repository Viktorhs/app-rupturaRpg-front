import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaBookOpen,
  FaDiceD20,
  FaHistory,
} from 'react-icons/fa';
import NavigationButton from './NavigationButton';
import logo from "../../Common/Logo_PNG.svg"


export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
      <Link to="/dashboard" className='logo'>
        <img src={logo} alt="logo"></img>
      </Link>
      
      <Link to="/dashboard/sheets">
        <NavigationButton active={isActive('/dashboard/sheets')}>
          <FaBookOpen/>
          <span>Fichas</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/dice">
        <NavigationButton active={isActive('/dashboard/dice')}>
          <FaDiceD20 />
          <span>Dado do dia</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/history">
        <NavigationButton active={isActive('/dashboard/history')}>
          <FaHistory/>
          <span>Historico</span>
        </NavigationButton>
      </Link>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #452F4F;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);
  width: 100px;
  height: 100vh;
  justify-content: flex-start;
  
  img{
    margin-top: 30px;
    margin-bottom: 100px;
  }

  span{
    color: #FFFFFF;
  }
  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content:space-evenly;

    img{
      display: none;
      width: 0;
    }
    .logo{
      display: none;
    }
  }
`;
