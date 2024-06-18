import { createContext, useEffect, useReducer, useState } from "react";
import React from 'react'

export const GlobalConstex = createContext()
const initialState = {
  search: "",
  fotoDeGaleria: [],
  fotoSeleccionada: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_SEARCH': 
      return {...state, search: action.payload};
    case 'SET_FOTODEGALERIA':
      return {...state, fotoDeGaleria: action.payload};
    case 'SET_FOTOSELECCIONADA':
      return {...state, fotoSeleccionada: action.payload};
    case 'ALTERNAR_FAVORITO':
      const fotosDeGaleria = state.fotoDeGaleria.map(fotoDeGaleria => {
        return {
          ...fotoDeGaleria,
          favorita: fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita
        }
      })
      if(action.payload.id == state.fotoSeleccionada?.id){
      return{
        ...state,
        fotoDeGaleria: fotosDeGaleria, 
        fotoSeleccionada: {...state.fotoSeleccionada, favorita: !state.fotoSeleccionada.favorita}
      }
    }else{
        return {
          ...state, fotoDeGaleria: fotosDeGaleria}
      }
    default:
      return state
  }
}

const GlobalContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [search, setSearch] = useState("")
  // const [fotoDeGaleria, setFotoDeGaleria] = useState([])
  // const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/fotos')
      const data = await res.json()
      // setFotoDeGaleria([...data])
      dispatch({type:'SET_FOTODEGALERIA', payload:data})
    }
    setTimeout(() => getData(), 2000)
  }, [])

  return (
    <GlobalConstex.Provider value={{state, dispatch}}>
      {children}
    </GlobalConstex.Provider>
  )
}

export default GlobalContexProvider