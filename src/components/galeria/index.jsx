import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Card from "./Card"
import { useContext, useEffect } from "react"
import Cargando from "../Cargando"
import { GlobalConstex } from "../../context/GlobalContex"

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

const Galeria = () => {
  const {state, dispatch} = useContext(GlobalConstex)
  return (state.fotoDeGaleria.length == 0 ? <Cargando /> :<>
    <Tags />
    <GaleriaContainer>
      <SeccionFluida>
        <Titulo>Navegue por la galeria</Titulo>
        <CardContenedor>
          {state.fotoDeGaleria.filter(event => {
            return state.search == '' || event.titulo.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(state.search.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))
          }).map(fotos => <Card
            key={fotos.id}
            foto={fotos} />)
          }
        </CardContenedor>
      </SeccionFluida>
      <Populares />
    </GaleriaContainer>
  </>
  )
}

export default Galeria