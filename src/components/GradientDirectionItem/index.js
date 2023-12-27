// Write your code here
import {DirectionItem, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, selectedBtn, bool} = props
  console.log('In Item ', props)
  const {directionId, displayText} = each

  const clickToChange = () => {
    selectedBtn(directionId)
  }

  return (
    <DirectionItem>
      <DirectionBtn check={bool} type="button" onClick={clickToChange}>
        {displayText}
      </DirectionBtn>
    </DirectionItem>
  )
}

export default GradientDirectionItem
