import {
  ListElement,
  CountryName,
  VisitedButton,
  VisitedParagraph,
} from './styledComponents'

const CountryItem = props => {
  const {eachItem, markVisited} = props
  const {name, id, isVisited} = eachItem

  const onClickVisited = () => {
    markVisited(id)
  }
  return (
    <ListElement>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedParagraph>Visited</VisitedParagraph>
      ) : (
        <VisitedButton onClick={onClickVisited}>Visit</VisitedButton>
      )}
    </ListElement>
  )
}
export default CountryItem
