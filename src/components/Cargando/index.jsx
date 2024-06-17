import React from 'react'

const Cargando = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column',
      marginTop: '50px'
    }}>
      <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" style={{ 
        width: '8vw' }} />
      <h1 style={{ fontSize: '4rem', color:'#FFF', margin: '0' }}>LOADING</h1>
    </div>
  )
}

export default Cargando