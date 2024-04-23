// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggetion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggetion-text">{suggestion}</p>
      <button type="button" className="button-arrow" onClick={onClickSuggetion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
