import styled from "styled-components"
import Input from "../Input"

const HeaderSytle = styled.header`
  padding: 60px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  img{
    width: 212px;

  }
`

const Header = ({setSearch}) => {
  return <HeaderSytle>
    <img src="imagenes/logo.png" alt="Logo de Space App"/>
    <Input setSearch={setSearch}/>
  </HeaderSytle>
}

export default Header