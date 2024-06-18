import { useContext, useRef } from "react";
import { styled } from "styled-components"
import search from './search.png'
import { GlobalConstex } from "../../context/GlobalContex";

const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    width: 50%;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    &::placeholder{
      color: #d9d9d9e4;
    }
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`;

const CampoTexto = () => {
    const cajaSearch = useRef(null)
    const {dispatch} = useContext(GlobalConstex)
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
            type="text" 
            ref={cajaSearch}
            placeholder="¿Qué estás buscando?"
            />
            <IconoLupa src={search} alt="ícono de lupa" onClick={() => {
                // console.log();
                dispatch({type:'SET_SEARCH', payload:cajaSearch.current.value})
            }}/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;