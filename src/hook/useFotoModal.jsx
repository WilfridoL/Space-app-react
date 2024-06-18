import { useContext } from "react"
import { GlobalConstex } from "../context/GlobalContex"

function useFotoModal () {
  const { state, dispatch } = useContext(GlobalConstex);

    const abrirModal = (foto) => {
        dispatch({ type: 'SET_FOTOSELECCIONADA', payload: foto })
    }


    const cerrarModal = () => {
        dispatch({ type: 'SET_FOTOSELECCIONADA', payload: null })
    }

    const fotoSeleccionada = state.fotoSeleccionada;

    const estaAbiertoModal = state.modalAbierto;

    return { fotoSeleccionada, estaAbiertoModal, abrirModal, cerrarModal }
}

export default useFotoModal