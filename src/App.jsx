import styled from "styled-components"
import GobalStyle from "./components/gobal-styles";
import Header from "./components/Header";
import BarraLateral from "./components/SideBar";
import Banner from "./components/Banner";
import imgBanner from './assets/banner.png'
import Galeria from "./components/galeria";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);  
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
width: 100%;
margin: 0 auto;
`

const MainContainer = styled.div`
  width: 100%;
  display: flex;  
  padding: 0px 24px;
  gap: 24px;
  box-sizing: border-box;
`

const ContenidoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

function App() {

  return (
    <>
      <FondoGradiente>
        <GobalStyle />
        <AppContainer>
          <Header />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner 
              texto='La galería más completa del espacio' 
              backgroundImg={imgBanner} 
              />
              <Galeria />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
