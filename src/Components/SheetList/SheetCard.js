import { useState } from "react";
import styled from "styled-components"
import logo from "../../Common/Logo_PNG.svg"
import { useNavigate } from "react-router-dom";

export function SheetCard({id, name, daySurvived, job, race, img}) {
    const navigate = useNavigate()

    function checkUrl (img) {

        if(!img) {
            return false
        }

        let givenURL
        try {
            givenURL = new URL (img);
        } catch (error) {
            console.log ("error is", error);
           return false; 
        }
        return true;
      }

    return(
        <Container onClick = {()=> navigate(`/sheet/${id}`)}>
            <SheetImg>
                <img src={checkUrl(img) ? img : logo} alt="characterImg"></img>
            </SheetImg>
            <SheetInfos>
                <span>
                    <h2>Nome: {name ? name : "indefinido"}</h2>
                </span>
                <span className="infos">
                    <h4>Raça: {race ? race : "indefinido"}</h4>
                    <span className="divisor"></span>
                    <h4>Função: {job ? job : "indefinido"}</h4>
                    <span className="divisor"></span>
                    <h4>Dias sobrevividos: {daySurvived ? daySurvived : 0}</h4>
                </span>
            </SheetInfos>
            
        </Container>
    )
}

const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    max-width: 420px;
    min-height: 450px;
    border-radius: 10px;
    background-color: #452F4F;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 10px;
    cursor: pointer;

    &&:hover{
        filter: brightness(110%);
    }

    &&:active{
        transform: translate( -1.2px, 8px);
    }

`

const SheetInfos = styled.div`
    .infos{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-top: 10px;
    }

    h2, h4{
        color: #FFFFFF;
        word-wrap: break-word;
    }

    .divisor{
        height: 40px;
        border: 1px solid #FFFFFF;
        margin: 0 10px;
    }
    
    width: 100%;
    min-height: 40px;
`

const SheetImg = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;

    border: 1px solid #FFFFFF;
    border-radius: 10px;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`