import styled from "styled-components"

export function WorkInProgress(){
  return (
    <Container> <h1>Work in Progress... </h1></Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  h1{
    font-size: 48px;
    font-weight: 700;
    color: #FFFFFF;
  }
  
`