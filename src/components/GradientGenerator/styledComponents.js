// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to
      ${props => {
        console.log(props)
        return props.bgDirection
      }},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  background-size: cover;
  height: 100%;
  width: 100%;
`

export const Heading = styled.h1`
  color: #fff;
  font-weight: bold;
`

export const Para = styled.p`
  color: #fff;
`

export const InputDiv = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  appearance: none;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  border: none;
  outline: none;
  color: #000;
  padding: 10px;
  background-color: #00c9b7;
  border-radius: 10px;
`

export const DirectionContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
