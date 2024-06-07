import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Populares from "./Populares/Populares"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
display: flex;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`

const Galeria = () => {
  return (<>
    <Tags />
    <GaleriaContainer>
      <SeccionFluida>
      <Titulo>Navegue por la galeria</Titulo>
      </SeccionFluida>
      <Populares/>
    </GaleriaContainer>
  </>
  )
}

export default Galeria