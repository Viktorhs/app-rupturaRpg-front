import { useEffect, useState } from "react"
import styled from "styled-components"
import shield from "../../../Common/icons/Escudo_CA.svg"
import { StatusBar } from "./StatusBar"
import { StatusCounter } from "./StatusCounter"


function Initiative({value}){
    const [bonus, setBonus] = useState('0')
    useEffect(()=>{
        setBonus(Math.floor(value/2) - 5)
    },[value])

    return (
        <Box>
            <div className="bonus">
                {bonus}
            </div>
            <div className="name">
                <h4>INICIATIVA</h4>
            </div>
        </Box>
    )
}

function Displacement ({name, value, handleForm, isButtonDisabled}){
    return (
        <Box>
            <div className="name">
                <h4>DESLOCAMENTO</h4>
            </div>
            <div className="value">
                <input
                    name={name}
                    type="number"
                    value={value || ""}
                    onChange={handleForm}
                    disabled={isButtonDisabled}
                    autocomplete="off"
                />
            </div>
        </Box>
    )
}

function CA({name, value, handleForm, isButtonDisabled}){
  return(
    <Shield>
      <div className="name">
                <h4>CLASSE DE ARMADURA</h4>
            </div>
            <div className="value">
                <input
                    name={name}
                    type="number"
                    value={value || ""}
                    onChange={handleForm}
                    disabled={isButtonDisabled}
                    autocomplete="off"
                />
            </div>
      <img src={shield} alt="shield"></img>
    </Shield>
    
  )
}

export function SheetStatus({status, setStatus, isButtonDisabled, dexterity}){
  function handleForm(event) {
        if(event.target.value.length < 4){
        setStatus({
            ...status,
            [event.target.name]: Number(event.target.value),
         }) 
        }
     
    }

    console.log(status)

    return (
        <Container>
            <List>
                <Initiative
                value={dexterity}/>
                <CA
                handleForm={handleForm}
                name={"CA"}
                value={status.CA}
                isButtonDisabled={isButtonDisabled}/>
                <Displacement
                name={"speed"}
                value={status.speed}
                isButtonDisabled={isButtonDisabled}
                handleForm={handleForm}/>
            </List>

            <List>
                <StatusBar
            name={"Life"}
            max={status.totalLife}
            bonus={status.bonusLife}
            actual={status.actualLife}
            isButtonDisabled={isButtonDisabled}
            handleForm={handleForm}>
                VIDA
            </StatusBar>

            <StatusBar
            name={"Sanity"}
            max={status.totalSanity}
            bonus={status.bonusSanity}
            actual={status.actualSanity}
            isButtonDisabled={isButtonDisabled}
            handleForm={handleForm}>
                SANIDADE
            </StatusBar>
            </List>

            <List>

                <StatusCounter
                setStatus={setStatus}
                status={status}
                name={"death"}
                >MORTE</StatusCounter>

            </List>
            
        </Container>
       
    )
}

const Container = styled.div`
 width: 50%;
  @media (max-width: 1020px) {
        width: 40%;
	}
    @media (max-width: 830px) {
        width: 100%;
	}
`

const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #639;
    border-radius: 10px;
    margin: 30px 10px 0 10px;
    width: 110px;
    height: 130px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
}

    .value{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        
    }
    .value input{
        text-align: center;
        z-index: 11;
        width: 75%;
        height: 110px;
        font-weight: 700;
        font-size: 34px;
        border: none;
        margin-bottom: 10px;
    }

    .bonus{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 36px;
        color: #000000;
        position: absolute;
        z-index: 8;
        color: #FFFFFF;
    }

    .name{
        width: 80%;
        height: 100%;
        display: flex;
        margin-top: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        z-index: 1;
    }

    .name h4{
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

`
const List = styled.span`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`

const Shield = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 10px 0 10px;
    width: 120px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    
}

    .value{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 36px;
        color: #000000;
        position: absolute;
        z-index: 8;
        color: #FFFFFF;
    }

    .name{
        width: 90%;
        height: 100%;
        display: flex;
        margin-top: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: absolute;
        z-index: 1;
    }

    .name h4{
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        color: #FFFFFF;
        margin-top: 7px;
    }

    .value input {
        text-align: center;
        z-index: 11;
        width: 60%;
        height: 75px;
        font-weight: 700;
        font-size: 34px;
        color: #FFFFFF;
        border: none;
        margin-top: 15px;
    }
`