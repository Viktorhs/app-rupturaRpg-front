import { SheetInformations } from "./SheetInformations"
import { SheetAttributes } from "./SheetAttributes"
import { SheetStatus } from "./SheetStatus"
import styled from "styled-components"

export function SheetFirstPage({isButtonDisabled, setInformations, informations, status, setStatus, setAttributes, attributes}) {
    
    return (
        <Container>
            <SheetInformations
            informations={informations}
            setInformations={setInformations}
            isButtonDisabled={isButtonDisabled}/>
            <List>
                <SheetAttributes
                attributes={attributes}
                setAttributes={setAttributes}
                isButtonDisabled={isButtonDisabled}/>
                
                <SheetStatus
                status={status}
                setStatus={setStatus}
                dexterity={attributes.dexterity}
                isButtonDisabled={isButtonDisabled}/>
            </List>
            
        </Container>
    )
}

const List = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Container = styled.div`
width: 90%;
`