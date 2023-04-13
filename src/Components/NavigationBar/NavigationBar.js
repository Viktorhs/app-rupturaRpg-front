import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaBookOpen,
  FaDiceD20,
  FaHistory,
} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi'
import NavigationButton from './NavigationButton';
import logo from "../../Common/Logo_PNG.svg"


export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
      <Link to="/" className='logo'>
        <Logo>
          <img src={logo} alt="logo"></img>
        </Logo>
        
      </Link>
      
      <Link to="/sheets">
        <NavigationButton active={isActive('/sheets')}>
          <FaBookOpen/>
          <span>Fichas</span>
        </NavigationButton>
      </Link>

      <Link to="/dice">
        <NavigationButton active={isActive('/dice')}>
          <FaDiceD20 />
          <span>Dado do dia</span>
        </NavigationButton>
      </Link>

      <Link to="/history">
        <NavigationButton active={isActive('/history')}>
          <FaHistory/>
          <span>Historico</span>
        </NavigationButton>
      </Link>
      <Link to="/sign-in" onClick={() => localStorage.clear()} className="logout">
        <NavigationButton>
          <BiLogOut/>
          <span>logout</span>
        </NavigationButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #639;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);
  width: 100px;
  height: 100vh;
  justify-content: center;
  
  img{
    position: fixed;
    top: 30px;
  }

  .logout{
    position: fixed;
    bottom: 10px;
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
    .logout{
      display: none;
    }
  }
`;

const Logo = styled.div`
  background-color: transparent;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
