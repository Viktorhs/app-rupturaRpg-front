import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSheet, updateSheet } from "../../services/rupturaAPI";
import { SheetFirstPage } from "./SheetFirstPage/SheetFirstPage";
import { Dna } from 'react-loader-spinner'

export function Sheet(){
  const [completed, setCompleted] = useState(false)
  const [informations, setInformations] = useState()
  const [status, setStatus] = useState()
  const [attributes, setAttributes] = useState()
  const [description, setDescription] = useState()
  const [skills, setSkills] = useState()
  const [notes, setNotes] = useState()
  const [items, setItems] = useState()
  const [weapons, setWeapons] = useState()
  const [defenses, setDefenses] = useState()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  let sheet = {}
  const {sheetId} = useParams()
  
  useEffect(() => {
    const promise = getSheet(sheetId);
    promise.catch((r) => {
      alert('falha na requisição');
      console.log(r);
    })
    promise.then((r) => {
      setInformations(r.data.characterInformations[0])
      setStatus(r.data.characterStatus[0])
      setAttributes(r.data.characterAttributes[0])
      setDescription(r.data.characterDescription[0])
      setSkills(r.data.characterSkills[0])
      setNotes(r.data.characterNotes[0])
      setItems(r.data.characterItems[0])
      setWeapons(r.data.characterWeapons[0])
      setDefenses(r.data.characterDefenses[0])
      setCompleted(true)
    })
  }, [])

  function sendForm(event){
      event.preventDefault()
      setIsButtonDisabled(true)
      sheet = {
        characterInformations:{...informations},
        characterStatus: {...status},
        characterAttributes: {...attributes},
        characterDescription: {...description},
        characterSkills:{...skills},
        characterNotes:{...notes},
        characterItems:{...items},
        characterWeapons:[{...weapons}], 
        characterDefenses:[{...defenses}],

      }
      console.log(sheet)
      const promise = updateSheet(sheetId, sheet)
      promise.catch((r)=>{
        alert("n deu")
      })
      promise.then((r => {
        setIsButtonDisabled(false)
      }))
      
      
  }


  return(
    <>
      {completed ? 
      <MainPage>
            <Container>
                <FormDiv>
                    <form onSubmit={sendForm}>
                        <SheetFirstPage
                          isButtonDisabled={isButtonDisabled}
                          setInformations={setInformations}
                          informations={informations}
                          setStatus={setStatus}
                          status={status}
                          setAttributes={setAttributes}
                          attributes={attributes}/>
                          <button name="login" type="submit" disabled={isButtonDisabled}>
						Entrar
					</button>
                    </form>
                </FormDiv>
            </Container>
        </MainPage>
        :
        <Load>
          <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"/>
        </Load>
      }
      
    </>
  )
}


const MainPage = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    padding: 30px 0;
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
		font-size: 18px;
		line-height: 25px;

		@media (max-width: 635px) {
			width: 85%;
		}
	}

    input:disabled{
        opacity: 0.5;
    }
`

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .dna-wrapper{
    transform: rotate(90deg);
  }

`