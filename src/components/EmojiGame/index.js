/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.state = {
      emojisList,
      score: 0,
      topScore: 0,
      gameOver: false,
      currentEntered: [],
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  selectedItem = id => {
    const {currentEntered, score, topScore} = this.state

    if (currentEntered.includes(id)) {
      this.setState({gameOver: true})
    } else {
      let newTopScore = topScore
      let gameOver = false
      if (score + 1 > topScore) {
        newTopScore = score + 1
        if (score + 1 === 12) gameOver = true
      }
      this.setState({
        currentEntered: [...currentEntered, id],
        score: score + 1,
        gameOver,
        topScore: newTopScore,
      })
    }
  }

  resetFunction = () => {
    this.setState({currentEntered: [], score: 0, gameOver: false})
  }

  cardsDisplay = () => {
    const emojisList = this.shuffledEmojisList()
    //  console.log(1)
    return (
      <ul className="cards-display">
        {emojisList.map(item => (
          <EmojiCard
            selectedItem={this.selectedItem}
            cardItem={item}
            key={item.id}
          />
        ))}
      </ul>
    )
  }

  renderIfCompleted = () => {
    const {emojisList, currentEntered, score} = this.state
    const flag = emojisList.length === currentEntered.length
    return (
      <WinOrLoseCard
        resetFunction={this.resetFunction}
        score={score}
        flag={flag}
      />
    )
  }

  render() {
    const {score, topScore, gameOver} = this.state
    // console.log(115523, emojisList, score, topScore, displayScore)
    return (
      <div className="emoji-game-main-card">
        <NavBar topScore={topScore} score={score} displayScore={!gameOver} />
        <div className="main-body">
          {gameOver ? this.renderIfCompleted() : this.cardsDisplay()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
