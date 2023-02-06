import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../Common/Logo_PNG.svg"
import wave from "../../Common/Rasgado.svg"
import { signIn } from "../../services/rupturaAPI"

export function LoginPage() {
    const [form, setForm] = useState({
		email: '',
        password: ''
	})
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)
	const navigate = useNavigate()


    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    function sendForm(event){
        event.preventDefault()
		if(form.email && form.password){
			setIsButtonDisabled(true)
			const promise = signIn(form)
			promise
			.then((r) => {
				localStorage.removeItem("ruptura")
				let rupturaInf = JSON.stringify({
					...r.data
				})
				localStorage.setItem("ruptura", rupturaInf)
				setIsButtonDisabled(false)
			})
			.catch((r)=> {
				alert("erro no Login")
				setIsButtonDisabled(false)
			})
		}
        
    }

    return (
        <MainPage>
        <Container>
            <FormDiv>
				<form onSubmit={sendForm}>
					<input
						name="email"
						type="text"
						placeholder="E-mail"
						onChange={handleForm}
						disabled={isButtonDisabled}
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						onChange={handleForm}
						disabled={isButtonDisabled}
					/>
					<button name="login" type="submit" disabled={isButtonDisabled}>
						Entrar
					</button>
					<Link to="/sign-up">
						<p>Primeira vez? Crie sua conta!</p>
					</Link>
				</form>
			</FormDiv>
        </Container>
        <Logo>
            <img src={logo} alt="logo"></img>
        </Logo>
        </MainPage>
    )
}

const MainPage = styled.div`
	width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
    background-color: #452F4F;
    img{
        width: 80%;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
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
		width: 430px;
		height: 65px;
		background: #ffffff;
		border-radius: 6px;
		margin-bottom: 13px;
        padding: 10px 20px;

        font-weight: 400;
		font-size: 27px;
		line-height: 40px;

		@media (max-width: 635px) {
			width: 85%;
		}
	}

	input::placeholder {
		font-weight: 700;
		font-size: 27px;
		line-height: 40px;

	}

    input:disabled{
        opacity: 0.5;
    }

	button {
		all: unset;
		border: 1px solid #FFFFFF;
		width: 430px;
		height: 65px;
		background: #452F4F;
		border-radius: 6px;
		margin-bottom: 13px;
		font-style: normal;
		font-weight: 700;
		font-size: 27px;
		color: #ffffff;
		text-align: center;

		@media (max-width: 635px) {
			width: 85%;
		}
	}

	button:disabled {
		background: #000000;
        opacity: 0.5;
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		text-decoration: underline;
		color: #ffffff;
		text-align: center;
	}
`