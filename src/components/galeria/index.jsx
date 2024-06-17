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
  const {fotoDeGaleria, search, seleccionarFoto, alternarFavorito, setFotoSeleccionada} = useContext(GlobalConstex)
  // console.log(contex);
  return (fotoDeGaleria.length == 0 ? <Cargando /> :<>
    <Tags />
    <GaleriaContainer>
      <SeccionFluida>
        <Titulo>Navegue por la galeria</Titulo>
        <CardContenedor>
          {fotoDeGaleria.filter(event => {
            return search == '' || event.titulo.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(search.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))
          }).map(foto => <Card
            alternarFavorito={alternarFavorito}
            solicitarZoom={foto => setFotoSeleccionada(foto)}
            key={foto.id}
            foto={foto} />)
          }
        </CardContenedor>
      </SeccionFluida>
      <Populares />
    </GaleriaContainer>
  </>
  )
}

export default Galeria