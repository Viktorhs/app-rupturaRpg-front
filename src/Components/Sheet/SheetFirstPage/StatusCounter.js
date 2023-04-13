import { useEffect, useState } from "react"
import styled from "styled-components"

function Calculator({successes, failure, setStatus, status, isButtonDisabled, name}){

  const [success, setSuccess] = useState({
    1: false,
    2: false,
    3: false
  })

  const [fail, setFail] = useState({
    1: false,
    2: false,
    3: false
  })

  function toggle(n, name){
    if(name === "fail"){
     const failObj = {
      ...fail
     }
     failObj[n] = !failObj[n]
     setFail({
      ...failObj
     })
    }

    if(name === "success"){
      const successObj = {
      ...success
     }
     successObj[n] = !successObj[n]
     setSuccess({
      ...successObj
     })
    }
    
  }

  function addAndRemove(n, name){

    if(name === "fail"){
      if(n === 1){
        setFail({
          ...fail,
          1: true
        })
      }else if(n === 2){
        setFail({
          ...fail,
          1: true,
          2: true
        })
      }else if(n === 3 ){
        setFail({
          1: true,
          2: true,
          3: true
        })
      }
    }

    if(name === "success"){
      if(n === 1){
        setSuccess({
          ...success,
          1: true
        })
      }else if(n === 2){
        setSuccess({
          ...success,
          1: true,
          2: true
        })
      }else if(n === 3 ){
        setSuccess({
          1: true,
          2: true,
          3: true
        })
      }
    }

  }

  useEffect(()=>{
    addAndRemove(successes, "sucesses")
    addAndRemove(failure, "fail")
  }, [success, failure, fail, successes])

  

  return(
  <Box>
    <CheckBox active={fail[1]} onClick={() => toggle(1, "fail")}>
      <div></div>
    </CheckBox>
    <CheckBox active={fail[2]} onClick={() => toggle(2, "fail")}>
      <div></div>
    </CheckBox>
    <CheckBox active={fail[3]} onClick={() => toggle(3, "fail")}>
      <div></div>
    </CheckBox>
  </Box>
  )
}

export function StatusCounter({name, status, setStatus, children, isButtonDisabled}){

  return(
    <Container>
      <span>
        <label>TESTE DE {children}</label>
      </span>
      <Calculator
      name={name}
      failure={status[`${name}Failure`]}
      successes={status[`${name}Successes`]}
      setStatus={setStatus}
      status={status}
      isButtonDisabled={isButtonDisabled}/>
      

    </Container>
  )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid #639;
  border-radius: 10px;
  margin: 20px 8px 0 0px;
  width: 255px;
  height: 120px;

  span label{
    margin-right: 5px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    margin-top: 10px;
  }

  span{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }

 

   input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    
  }

   span input {
    text-align: center;
    width: 40%;
    height: 20px;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80px;

  .value label{
    color: #FFFFFF;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    margin-top: 2px;
  }

  .value{
    width: 50%;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    
   
  }

`
const CheckBox = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${props => props.active ? 'background-color: #FF6600;' : ''}
  }

`