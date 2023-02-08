import styled from "styled-components"
import {
    FaPlusCircle
  } from 'react-icons/fa';
import { createCharacterSheet, listSheets } from "../../services/rupturaAPI";
import { useEffect, useState } from "react";
import { SheetCard } from "./SheetCard";


export function SheetList() {
    const [sheets, setSheets] = useState([])
    const [refresh, setRefresh] = useState(false)

    function createSheet(){
        console.log(refresh, "cliquei")
        const promise = createCharacterSheet()
        promise.then((r) => {
            console.log(r)
            setRefresh(true)
        })
        promise.catch((r) => {
            console.log(r)
            alert("falha em criar a ficha")
        })
    }

    useEffect(() => {
        const promise = listSheets()
        promise.then((r) => {
            console.log(r.data)
            setSheets(r.data)
        })
        promise.catch(() =>{
            alert("falha em obter as fichas")
        })
    }, [refresh])

    return (
        <Container>
            <h1>Suas fichas</h1>
            <div>
                <ul>
                    {sheets.map((item) => (
                        <SheetCard
                        name = {item.characterName} 
                        daySurvived = {item.daySurvived}
                        job = {item.fucntion} 
                        race = {item.race}
                        img = {item.img}/>
                    ))}
                    
                    <CreateCard onClick={()=> {createSheet()}}>
                        <FaPlusCircle className="plus"></FaPlusCircle>
                        <p>Criar nova ficha</p>
                    </CreateCard>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100vh;

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 40px;
        color: #FFFFFF;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    && > div{
        width: 100%;
        height: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 5px;
    }

    ul {
        width: 98%;
        max-height: 100%;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    @media (max-width: 1020px) {
			ul{
                align-items: center;
                flex-direction: column;
            }
		}
`

const CreateCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 420px;
    width: 100%;
    min-height: 450px;
    border: 1px dotted #FFFFFF;
    border-radius: 10px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    &&:active{
        transform: translatey(5px);
    }


    p{
        margin: 10px;
        color: #FFFFFF;
        word-wrap: break-word;
    }

    .plus {
    font-size: 28px;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`