import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Populares from "./Populares/Populares"
import Tags from "./Tags"
import Card from "./Card"

const GaleriaContainer = styled.div`
display: flex;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
  return (<>
    <Tags />
    <GaleriaContainer>
      <SeccionFluida>
        <Titulo>Navegue por la galeria</Titulo>
        {/* {fotos.map(foto => <p key={foto.id}>{foto.path}</p>)} */}
        <Card/>
      </SeccionFluida>
      <Populares />
    </GaleriaContainer>
  </>
  )
}

export default Galeria