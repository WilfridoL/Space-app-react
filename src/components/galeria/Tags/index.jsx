import styled from 'styled-components'
import tags from './tags.json'

const TagsStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #D9D9D9;
  font-size: 24px;
`
const Btn = styled.button`
  padding: 10px 8px;
  border-radius: 10px;
  color: #FFFFFF;
  background: rgba(217,217,217, 0.3);
  cursor: pointer;
  border: 2px solid transparent;
  transition: all .3s ease;
  &:hover{
    border-color: #C98CF1;
  }
`

const Tags = () => {
  return <TagsStyle>
    <p>Busque por tags:</p>
    <>
      {tags.map(tag => <Btn key={tag.id}>{tag.titulo}</Btn>)}
    </>
  </TagsStyle>
}
export default Tags