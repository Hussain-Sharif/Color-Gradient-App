// eslint-disable-next-line
import {Component} from 'react'
import {
  MainDiv,
  Heading,
  Para,
  GenerateButton,
  DirectionContainer,
  InputDiv,
  Input,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    directionIs: gradientDirectionsList[0].directionId,
    firstInput: '#8ae323',
    secondInput: '#014f7b',
    data: {
      directionIs: gradientDirectionsList[0].directionId,
      firstInput: '#8ae323',
      secondInput: '#014f7b',
    },
  }

  firstChange = event => {
    this.setState({firstInput: event.target.value})
  }

  secondChange = event => {
    this.setState({secondInput: event.target.value})
  }

  selectedBtn = id => {
    this.setState({directionIs: id})
  }

  generateBtn = () => {
    this.setState(prev => {
      const {firstInput, secondInput, directionIs} = prev
      return {
        data: {
          directionIs,
          firstInput,
          secondInput,
        },
      }
    })
  }

  render() {
    const {directionIs, firstInput, secondInput, data} = this.state
    console.log(
      'after Rendered==> ',
      directionIs,
      firstInput,
      secondInput,
      data,
    )
    return (
      <MainDiv
        data-testid="gradientGenerator"
        bgDirection={
          gradientDirectionsList.filter(
            each => each.directionId === data.directionIs,
          )[0].value
        }
        firstColor={data.firstInput}
        secondColor={data.secondInput}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <DirectionContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              selectedBtn={this.selectedBtn}
              each={each}
              bool={directionIs === each.directionId}
            />
          ))}
        </DirectionContainer>
        <Para>Pick the Colors</Para>
        <InputDiv>
          <div>
            <Para>{firstInput}</Para>
            <Input
              onChange={this.firstChange}
              type="color"
              id="firstInput"
              value={firstInput}
            />
          </div>
          <div>
            <Para>{secondInput}</Para>
            <Input
              onChange={this.secondChange}
              type="color"
              id="secondInput"
              value={secondInput}
            />
          </div>
        </InputDiv>
        <GenerateButton type="button" onClick={this.generateBtn}>
          Generate
        </GenerateButton>
      </MainDiv>
    )
  }
}

export default GradientGenerator
