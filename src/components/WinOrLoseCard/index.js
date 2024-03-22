// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {flag, score, resetFunction} = props
  const buttonFunction = () => {
    resetFunction()
  }
  const winGame = (
    <div className="win-loss-box">
      <div className="text-box">
        <h1 className="game-result">You Won</h1>
        <p className="score-title-text">Best Score</p>
        <p className="score-number-text">{`${score}/12`}</p>
        <button
          onClick={buttonFunction}
          type="button"
          className="score-reset-button"
        >
          Play Again
        </button>
      </div>
      <img
        className="win-loss-image"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
    </div>
  )
  const loseGame = (
    <div className="win-loss-box">
      <div className="text-box">
        <h1 className="game-result">You Lose</h1>
        <p className="score-title-text">Score</p>
        <p className="score-number-text">{`${score}/12`}</p>
        <button
          onClick={buttonFunction}
          type="button"
          className="score-reset-button"
        >
          Play Again
        </button>
      </div>
      <img
        className="win-loss-image"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
    </div>
  )
  return flag ? winGame : loseGame
}

export default WinOrLoseCard
