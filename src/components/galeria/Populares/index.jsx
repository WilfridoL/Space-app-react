import styled from "styled-components"
import Titulo from "../../Titulo/Titulo"
import fotosPopulares from './../../../fotos-populares.json'
import { useState } from "react"

const ContaninerPopularCard = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 200px;
    border-radius: 20px;
  }
  section{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`
const Btn = styled.button`
  background: none;
  color: #FFFFFF;
  border:3px solid #7B78E5;
  border-radius: 10px;
  padding: 12px 0px;
  max-width: 100%;
  cursor: pointer;
  font-size: 20px;
`

const Populares = () => {
  const [fotoPopular, setFotoPopular] = useState(fotosPopulares)
  return <ContaninerPopularCard>
  <Titulo $align='center'>Populares</Titulo>
  <section>
    {fotoPopular.map(e => <img src={`${e.path}`} key={e.id}/>)}
    <Btn>Ver más</Btn>
  </section>
  </ContaninerPopularCard>
}

export default Populares