import { useEffect, useState } from "react"
import styled from "styled-components"

function Calculator({actual, bonus, handleForm, isButtonDisabled, name}){

  const [total, setTotal] = useState(0)

  useEffect(()=>{
    if(actual >= 0 || bonus >= 0){
    setTotal(Number(actual)+Number(bonus))
  }
  }, [actual, bonus])

  

  return(
  <Box>
    <div className="value">
      <div>
        <input
            name={`actual${name}`}
            type="number"
            value={actual || ""}
            onChange={handleForm}
            disabled={isButtonDisabled}
        />
      </div>
        
        <label>atual</label>
      </div>

      <h5>+</h5>

      <div className="value">
        <div>
        <input
            name={`bonus${name}`}
            type="text"
            value={bonus || ""}
            onChange={handleForm}
            disabled={isButtonDisabled}
        />
      </div>
        <label>temp.</label>
      </div>

      <h5>=</h5>

      <div className="value">
        <div>
          <h4>{total || 0}</h4>
        </div>
        
        <label>total</label>
      </div>
  </Box>
  )
}

export function StatusBar({name, children, max, bonus, actual, handleForm, isButtonDisabled}){

  return(
    <Container>
      <span>
        <label>{children} MAXIMA:</label>
        <input
            name={`total${name}`}
            type="number"
            value={max || ""}
            onChange={handleForm}
            disabled={isButtonDisabled}
        />
      </span>
      <Calculator
      name={name}
      actual={actual}
      bonus={bonus}
      handleForm={handleForm}
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
    font-size: 14px;
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

  h5{
    margin-bottom: 10px;
    color: #FFFFFF;
    font-size: 700;
  }
  h4{
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
  }

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

  .value div{
  border: 1px solid #FFFFFF;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  }

 

   input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    
  }

   .value input {
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    border: none;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
  }

`