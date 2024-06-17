import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Card from "./Card"
import { useEffect } from "react"

const GaleriaContainer = styled.div`
display: flex;
`

const SeccionFluida = styled.section`
flex-grow: 1;
flex-direction: row;
`

const CardContenedor = styled.section`
display: flex;
flex-wrap: wrap;
gap: 24px;
`

const Galeria = ({ fotos = [], seleccionarFoto, alternarFavorito, search }) => {
  
  return (<>
    <Tags />
    <GaleriaContainer>
      <SeccionFluida>
        <Titulo>Navegue por la galeria</Titulo>
        <CardContenedor>
          {fotos.filter(event => {
            return search == '' || event.titulo.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(search.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))
          }).map(foto => <Card
            solicitarZoom={seleccionarFoto}
            key={foto.id}
            foto={foto} 
            alternarFavorito={alternarFavorito}/>)
          }
        </CardContenedor>
      </SeccionFluida>
      <Populares />
    </GaleriaContainer>
  </>
  )
}

export default Galeria