// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, displayScore} = props

  const RenderScore = () => (
    <div className="emoji-game-logo-and-title">
      <p className="score-text">{`Score: ${score}`}</p>
      <p className="score-text">{`Top Score: ${topScore}`}</p>
    </div>
  )

  return (
    <nav className="nav-bar">
      <div className="emoji-game-logo-and-title">
        <img
          className="emoji-game-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game-logo-title">Emoji Game</h1>
      </div>
      {displayScore && <RenderScore />}
    </nav>
  )
}

export default NavBar
