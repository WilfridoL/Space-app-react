import { styled } from "styled-components"
import BotonIcono from "../../BotonIcono"
import { useContext } from "react"
import { GlobalConstex } from "../../../context/GlobalContex"
import useFotoModal from "../../../hook/useFotoModal"
const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '380px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Card = ({ foto, expandida}) => {
    const { abrirModal } = useFotoModal();
    const { dispatch } = useContext(GlobalConstex);
    const iconoFavorito = foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png";

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Pie>
                    <h4>{foto.fuente}</h4>
                    <BotonIcono onClick={() => dispatch({ type: 'ALTERNAR_FAVORITO', payload: foto })}>
                        <img src={iconoFavorito} alt="Icone de favorito" />
                    </BotonIcono>
                    {!expandida && <BotonIcono aria-hidden={expandida} onClick={() => abrirModal(foto)}>
                        <img src="/iconos/expandir.png" alt="Icono de expandir" />
                    </BotonIcono>}
                </Pie>
            </figcaption>
        </Figure>)
}

export default Card