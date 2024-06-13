import styled from "styled-components"
import Card from "../galeria/Card"

const Overlay = styled.div`
background: rgba(0,0,0,.7);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
`

const DialogEstilizado = styled.dialog`
position: absolute;
top: 294px;
/* width: 90%; */
`

const ModalZoom = ({foto}) => {
  return <>
    {foto && <>
    <Overlay />
      <DialogEstilizado open={!!foto}>
      <Card foto={foto} expandida={true} />
      {/* <form method="dialog">
        <button>Ok</button>
        </form> */}
    </DialogEstilizado>
    </>}
  </>
}

export default ModalZoom