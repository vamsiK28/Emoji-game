// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardItem, selectedItem} = props
  const {id, emojiName, emojiUrl} = cardItem
  // console.log(3)
  const buttonWorkingFunction = () => {
    selectedItem(id)
  }
  return (
    <li className="li-width">
      <button
        onClick={buttonWorkingFunction}
        type="button"
        className="button-width"
      >
        <img className="emoji-card-item-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
