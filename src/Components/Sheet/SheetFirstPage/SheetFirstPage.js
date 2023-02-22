import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SheetInformations } from "./SheetInformations"
import { SheetStatus } from "./SheetStatus"

export function SheetFirstPage() {
    
    const [informations, setInformations] = useState({
		characterName: 'victor',
        function: 'seila',
        race: 'humano',
        alignment: 'leal',
        daysSurvived: 100
	})
    const [status, setStatus] = useState({
		força: 10,
        agilidade: 8
	})
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)
	const navigate = useNavigate()


    function handleForm(event) {
        setInformations({
            ...informations,
            [event.target.name]: event.target.value,
        })
    }

    function sendForm(event){
        event.preventDefault()
        setIsButtonDisabled(true)
		
        
    }

    return (
        <MainPage>
            <Container>
                <FormDiv>
                    <form onSubmit={sendForm}>
                        <SheetInformations
                        informations={informations}
                        setInformations={setInformations}
                        isButtonDisabled={isButtonDisabled}/>
                        <SheetStatus
                        status={status}
                        setStatus={setStatus}/>
                    </form>
                </FormDiv>
            </Container>
        </MainPage>
    )
}

const MainPage = styled.div`
	width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100vh;
    
`

const FormDiv = styled.div`
    form {
		height: 100%;
		display: flex;
		flex-direction: column;
        align-items: center;
		justify-content: center;

		@media (max-width: 635px) {
			margin-top: 10%;
			justify-content: center;
			align-items: center;
		}
	}

    input {
		all: unset;
        border-bottom: 2px solid #FFFFFF;
        margin-top: 10px;
        color: #FFFFFF;
        padding: 0px 10px;

        font-weight: 400;
		font-size: 27px;
		line-height: 40px;

		@media (max-width: 635px) {
			width: 85%;
		}
	}

    input:disabled{
        opacity: 0.5;
    }
`