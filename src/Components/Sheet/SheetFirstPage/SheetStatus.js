import { useEffect } from "react"
import { useState } from "react"
import strength from "../../../Common/icons/Icone_Forca.svg"
import charisma from "../../../Common/icons/Icone_Carisma.svg"
import constitution from "../../../Common/icons/Icone_Constituicao.svg"
import dexterity from "../../../Common/icons/Icone_Destreza.svg"
import ballisticSkill from "../../../Common/icons/Icone_Habilidade_Balistica_HB.svg"
import meleeSkill from "../../../Common/icons/Icone_Habilidade_de_Combate_HC.svg"
import intellingence from "../../../Common/icons/Icone_Inteligencia.svg"
import wisdom from "../../../Common/icons/Icone_Sabedoria.svg"
import styled from "styled-components"

function Status({name, value, handleForm, icon}){
    const [bonus, setBonus] = useState('0')

    useEffect(()=>{
        setBonus(Math.floor(value/2) - 5)
    },[value])

    return (
        <Container>
            <div className="value">
                <input
                    name={name}
                    type="number"
                    value={value || ""}
                    onChange={handleForm}
                />
            </div>
            <div className="bonus">
                {bonus}
            </div>
            <div className="name">
                <img src={icon}/>
                <h4>{name}</h4>
            </div>
        </Container>
    )
}

export function SheetStatus({status, setStatus}) {
    function handleForm(event) {
        if(event.target.value.length < 3){
            setStatus({
                ...status,
                [event.target.name]: Number(event.target.value),
            })
        }
        
    }

    return (
       <List>
        <Status
        value={status.força}
        name={"FORÇA"}
        handleForm={handleForm}
        icon={strength}/>

         <Status
        value={status.força}
        name={"SABEDORIA"}
        handleForm={handleForm}
        icon={wisdom}/>

        <Status
        value={status.agilidade}
        name={"AGILIDADE"}
        handleForm={handleForm}
        icon={dexterity}/>

        <Status
        value={status.força}
        name={"CARISMA"}
        handleForm={handleForm}
        icon={charisma}/>

        <Status
        value={status.força}
        name={"CONSTITUIÇÃO"}
        handleForm={handleForm}
        icon={constitution}/>

        <Status
        value={status.força}
        name={"HABILIDADE BALISTICA"}
        handleForm={handleForm}
        icon={ballisticSkill}/>

        <Status
        value={status.força}
        name={"INTELIGENCIA"}
        handleForm={handleForm}
        icon={intellingence}/>

        <Status
        value={status.força}
        name={"HABILIDADE CORPO A CORPO"}
        handleForm={handleForm}
        icon={meleeSkill}/>
       </List>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid purple;
    border-radius: 10px;
    margin: 30px 10px 0 10px;
    width: 170px;
    height: 220px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    
}

    .value{
        background-color: #FFFFFF;
        position: absolute;
        top: -25px;
        border: 4px solid purple;
        border-radius: 45%;
        width: 50px;
        height: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bonus{
        width: 100%;
        height: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 70px;
        color: #000000;
        position: absolute;
        z-index: 10;
        color: #FFFFFF;
    }

    .name{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        margin-top: 15px;
        z-index: 1;
    }

    .name img{
        height: 100px;
        margin-top: 20px;
        opacity: 0.8;
    }

    .name h4{

        text-align: center;
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;
    }

    .value input {
        text-align: center;
        width: 25px;
        height: 25px;
        font-weight: 700;
        font-size: 18px;
        color: #000000;
        border: none;
        margin-bottom: 10px;
    }

`

const List = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`