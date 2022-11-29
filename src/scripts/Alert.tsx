import * as React from "react"
import styled from "styled-components"

const AlertContainer = styled.div`
background-color: green;
font-size: 30px;
`;

const Alert: React.FC<{message: string}> =({message})=>{
    return(
        <AlertContainer>
            {message}
        </AlertContainer>
    )
}

export default Alert;
