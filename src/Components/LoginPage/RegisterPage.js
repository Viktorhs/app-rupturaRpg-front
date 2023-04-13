import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../Common/Logo_PNG.svg"
import { signUp } from "../../services/rupturaAPI"

export function RegisterPage() {
    const [form, setForm] = useState({})
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
		if(form.email && form.password && form.nickname){
			console.log(process.env.REACT_APP_API_BASE_URL)
			setIsButtonDisabled(true)
			const promise = signUp(form)
			promise.then((r) => {
				navigate("/")
			})
			promise.catch((r)=> {
				console.log(r)
				alert("erro no cadastro")
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
						name="nickname"
						type="text"
						placeholder="Nickname"
						onChange={handleForm}
						disabled={isButtonDisabled}
					/>
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
						Cadastrar-se
					</button>
					<Link to="/">
						<p>Ja tem conta? Entre agora!</p>
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
    background-color: #639;
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
		width: 430px;
		height: 65px;
		border: 1px solid #FFFFFF;
		background: #639;
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