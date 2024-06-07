import styled from "styled-components"

const BckStyle = styled.div`
  background: ${props => `url(${props.$backgroundImg})`} no-repeat;
  background-size:cover;
  flex-grow: 1;
  border-radius:20px;
  max-width: 100%;
  height:auto;
  display:flex;
  align-items:center;
  margin:0;
`
const TituloEstilizado = styled.h1`
  font-size: 40px;
  font-weight: 400;
  width: 301px;
  padding: 0px 64px;
  color: #FFFFFF;
  line-height: 48px;

`
const Banner = ({texto,backgroundImg}) => {
  return <BckStyle $backgroundImg={backgroundImg}>
    <TituloEstilizado>{texto}</TituloEstilizado>
  </BckStyle>
}

export default Banner