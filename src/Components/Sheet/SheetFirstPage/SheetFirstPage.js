import styled from "styled-components"
import { useState } from 'react'
import { SheetInformations } from "./SheetInformations"
import { SheetAttributes } from "./SheetAttributes"

export function SheetFirstPage({isButtonDisabled, setInformations, informations, status, setStatus, setAttributes, attributes}) {
    
    return (
        <>
            <SheetInformations
            informations={informations}
            setInformations={setInformations}
            isButtonDisabled={isButtonDisabled}/>
            <SheetAttributes
            attributes={attributes}
            setAttributes={setAttributes}
            isButtonDisabled={isButtonDisabled}/>
        </>
    )
}