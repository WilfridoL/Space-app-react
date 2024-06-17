import { createContext, useEffect, useState } from "react";
import React from 'react'

export const GlobalConstex = createContext()

const GlobalContexProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [fotoDeGaleria, setFotoDeGaleria] = useState([])
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  const alternarFavorito = (fotos) => {
    if (fotos.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotos.favorita
      })
    }

    setFotoDeGaleria(fotoDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === fotos.id ? !fotos.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/fotos')
      const data = await res.json()
      setFotoDeGaleria([...data])
    }
    setTimeout(() => getData(), 2000)
  }, [])

  return (
    <GlobalConstex.Provider value={{
      search,
      setSearch,
      fotoDeGaleria,
      setFotoDeGaleria,
      fotoSeleccionada,
      setFotoSeleccionada,
      alternarFavorito
    }}>
      {children}
    </GlobalConstex.Provider>
  )
}

export default GlobalContexProvider