import styled from "styled-components"
import { useEffect, useState } from 'react'
import {
    FaAngleDown,
    FaAngleUp
  } from 'react-icons/fa';

export function SheetInformations({informations, setInformations, isButtonDisabled}) {
    const [refresh, setRefresh] = useState(false)
    const name = (JSON.parse(localStorage.getItem('ruptura'))).nickname
    const [accountant, setAccountant] = useState({
        firts: 0,
        second: 0,
        third: 0,
        fourth: 0
    })
    let days = informations.daysSurvived.toString()
    if(days.length === 3){
        days = "0" + days
    }
    if(days.length === 2){
        days = "00" + days
    }
    if(days.length === 1){
        days = "000" + days
    }

    function addAndRemove(operation){
        if(operation === '+'){
            setInformations({
                ...informations,
                daysSurvived: informations.daysSurvived + 1
            })
            setRefresh(!refresh)
        }
        if(operation === '-'){
            if(informations.daysSurvived > 0){
                setInformations({
                    ...informations,
                    daysSurvived:informations.daysSurvived - 1
                })
                setRefresh(!refresh)
            } 
        }
    }

    useEffect(()=>{
        if(informations.daysSurvived) { 
                setAccountant({
                firts: days[3] || 0,
                second: days[2] || 0,
                third: days[1] || 0,
                fourth: days[0] || 0
            }) 
        }
    }, [refresh])

   

    function handleForm(event) {
        setInformations({
            ...informations,
            [event.target.name]: event.target.value,
        })
    }

    return (
            <Container>
                <BoxName>
                    <label>Nome do personagem:</label>
                    <input
                        name="characterName"
                        type="text"
                        value={informations?.characterName || ""}
                        onChange={handleForm}
                        disabled={isButtonDisabled}
                        autocomplete="off"
                    />
                </BoxName>
                <Box>
                    <BoxText>
                    <div>
                        <input
                            name="function"
                            type="text"
                            value={informations?.function || ""}
                            onChange={handleForm}
                            disabled={isButtonDisabled}
                            autocomplete="off"
                        />
                        <label>FUNÇÃO:</label>
                    </div>

                    <div>
                        <input
                            name="race"
                            type="text"
                            value={informations?.race || ""}
                            onChange={handleForm}
                            disabled={isButtonDisabled}
                            autocomplete="off"
                        />
                        <label>RAÇA:</label>
                    </div>

                    <div>
                        <input
                            name="alignment"
                            type="text"
                            value={informations?.alignment || ""}
                            onChange={handleForm}
                            disabled={isButtonDisabled}
                            autocomplete="off"
                        />
                        <label>TENDENCIA:</label>
                    </div>
                    
                    <div>
                        <input
                            name="player"
                            type="text"
                            value={name}
                            disabled
                        />
                        <label>JOGADOR</label>
                    </div>
                    </BoxText>
                    <div className="text">
                        <label>DIAS SOBREVIVIDOS:</label>
                        <div>
                            <Accountant>
                            <span>{accountant.fourth}</span>
                            <span>{accountant.third}</span>
                            <span>{accountant.second}</span>
                            <span>{accountant.firts}</span>
                            </Accountant>
                            <Buttons>
                                <span ><FaAngleUp onClick={()=> addAndRemove('+')}/></span>
                                <span ><FaAngleDown onClick={()=> addAndRemove('-')}/></span>
                            </Buttons>
                        </div>
                        
                    </div>
                   
                    
                </Box>

                
            </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 25px;

    label{
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }
    @media (max-width: 1320px) {
			flex-wrap: wrap;
		}
`

const Accountant = styled.div`
    margin-left: 30px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    background-color: blueviolet;
    height: 100px;
    border-radius: 20px;

    span{
        border-radius: 20px;
        width: 25px;
        height: 90%;
        margin: 3px;
        background-color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

        font-weight: 700;
		font-size: 22px;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

`

const Buttons = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 5px;
    height: 100px;
    font-size: 38px;
    color: #FFFFFF;

    span{
        cursor: pointer;
    }

`

const Box = styled.div`
    border: 3px solid #639;
    padding: 10px 20px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    .text{
        margin-left: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .text > div{
        display: flex;
        margin: 10px 0;
    }

    .text > label{
        margin-left: 28px;
        font-size: 12px;

    }

    @media (max-width: 1320px) {
			margin-top: 10px;
		}

`

const BoxText = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    

    label{
        margin-top: 5px;
        font-size: 12px;
    }

    div{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

     && input {
		width: 98%;
	}

    input:disabled{
        opacity: 0.5;
    }

`

const BoxName = styled.div`
    max-width: 38%;
    width: 100%;
    border: 3px solid #639;
    padding: 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 10px;

    && input{
        width: 95%;
    }

    @media (max-width: 1320px) {
			max-width: 100%;
		}
`