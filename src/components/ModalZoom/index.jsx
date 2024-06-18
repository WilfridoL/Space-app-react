import styled from "styled-components"
import Card from "../galeria/Card"
import BotonIcono from "../BotonIcono"
import { useContext } from "react"
import { GlobalConstex } from "../../context/GlobalContex"

const Overlay = styled.div`
    background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = () => {
    const {state, dispatch} = useContext(GlobalConstex)
    return <>
        {state.fotoSeleccionada && <>
            <Overlay />
            <DialogEstilizado open={!!state.fotoSeleccionada} onClose={() => dispatch({type:'SET_FOTOSELECCIONADA', payload:null})}>
                <Card foto={state.fotoSeleccionada} expandida={true}/>
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom