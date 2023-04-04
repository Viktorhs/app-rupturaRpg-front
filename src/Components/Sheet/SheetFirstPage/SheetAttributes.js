import { useEffect, useState } from "react"
import strength from "../../../Common/icons/Icone_Forca.svg"
import charisma from "../../../Common/icons/Icone_Carisma.svg"
import constitution from "../../../Common/icons/Icone_Constituicao.svg"
import dexterity from "../../../Common/icons/Icone_Destreza.svg"
import ballisticSkill from "../../../Common/icons/Icone_Habilidade_Balistica_HB.svg"
import meleeSkill from "../../../Common/icons/Icone_Habilidade_de_Combate_HC.svg"
import intellingence from "../../../Common/icons/Icone_Inteligencia.svg"
import wisdom from "../../../Common/icons/Icone_Sabedoria.svg"
import styled from "styled-components"

function Attributes({name, value, handleForm, icon, text, isButtonDisabled}){
    const [bonus, setBonus] = useState('0')
    useEffect(()=>{
        setBonus(Math.floor(value/2) - 5)
    },[value])

    return (
        <Container>
            
            <div className="bonus">
                {bonus}
            </div>
            <div className="name">
                <img src={icon}/>
                <h4>{text}</h4>
            </div>
            <div className="value">
                <input
                    name={name}
                    type="number"
                    value={value || ""}
                    onChange={handleForm}
                    disabled={isButtonDisabled}
                />
            </div>
        </Container>
    )
}

export function SheetAttributes({setAttributes, attributes, isButtonDisabled}) {
    console.log(attributes)
    function handleForm(event) {
        if(event.target.value.length < 3 && event.target.value <= 23){
            setAttributes({
                ...attributes,
                [event.target.name]: Number(event.target.value),
            })
        }
        
    }

    return (
       <List>
        <Attributes
        value={attributes.strength}
        name={"strength"}
        handleForm={handleForm}
        icon={strength}
        text={"FORÇA"}
        isButtonDisabled={isButtonDisabled}/>

         <Attributes
        value={attributes.wisdom}
        name={"wisdom"}
        handleForm={handleForm}
        icon={wisdom}
        text={"SABEDORIA"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.dexterity}
        name={"dexterity"}
        handleForm={handleForm}
        icon={dexterity}
        text={"DESTREZA"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.charisma}
        name={"charisma"}
        handleForm={handleForm}
        icon={charisma}
        text={"CARISMA"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.constitution}
        name={"constitution"}
        handleForm={handleForm}
        icon={constitution}
        text={"CONSTITUIÇÃO"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.intellingence}
        name={"intellingence"}
        handleForm={handleForm}
        icon={intellingence}
        text={"INTELIGENCIA"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.ballisticSkill}
        name={"ballisticSkill"}
        handleForm={handleForm}
        icon={ballisticSkill}
        text={"HABILIDADE BALISTICA"}
        isButtonDisabled={isButtonDisabled}/>

        <Attributes
        value={attributes.meleeSkill}
        name={"meleeSkill"}
        handleForm={handleForm}
        icon={meleeSkill}
        text={"HABILIDADE CORPO A CORPO"}
        isButtonDisabled={isButtonDisabled}/>
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
    width: 110px;
    height: 140px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    
}

    .value{
        background-color: #FFFFFF;
        position: absolute;
        z-index: 9;
        top: -25px;
        border: 4px solid purple;
        border-radius: 45%;
        width: 40px;
        height: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        justify-content: space-evenly;
        position: absolute;
        z-index: 1;
    }

    .name img{
        height: 38%;
        margin-top: 20px;
        opacity: 0.8;
    }

    .name h4{

        text-align: center;
        font-weight: 600;
        font-size: 12px;
        color: #FFFFFF;
    }

    .value input {
        text-align: center;
        z-index: 11;
        width: 36px;
        height: 68px;
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