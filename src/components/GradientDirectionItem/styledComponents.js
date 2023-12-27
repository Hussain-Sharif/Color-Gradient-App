// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  background-color: transparent;
`

export const DirectionBtn = styled.button`
  background-color: ##ffffff79;
  //   background-color: ${props => (props.check ? '#ededed' : '##ffffff79')};
  opacity: ${props => (props.check ? 1 : 0.5)};
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff99;
  cursor: pointer;
`
