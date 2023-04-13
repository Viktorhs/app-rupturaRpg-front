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
            <Title>
                <h1>Suas fichas</h1>
                <span > 
                    <FaPlusCircle onClick={()=> {createSheet()}}/>
                 </span>
            </Title>
            
            <div className="list">
                <ul>
                    {sheets.map((item) => (
                        <SheetCard
                        key = {item.id}
                        id = {item.id}
                        name = {item.characterInformations[0].characterName} 
                        daySurvived = {item.characterInformations[0].daysSurvived}
                        job = {item.characterInformations[0].function} 
                        race = {item.characterInformations[0].race}
                        img = {item.characterDescription[0].appearance}/>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`

    &&{
        padding: 20px;
        width: 100%;
        height: 100vh;
    }
    

    && > .list{
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
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }

    @media (max-width: 1020px) {
        ul{
            align-items: center;
            flex-direction: column;
        }
	}
`

const Title = styled.div`
    &&{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 40px;
        color: #FFFFFF;
        text-align: center;
        
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 20px;
    }

    span{
        align-items: center;
        justify-content: center;
        font-size: 23px;
        color: #FFFFFF;
        padding-top: 6px;
        cursor: pointer;
    }
`