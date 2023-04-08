/* eslint-disable react/jsx-curly-newline */
import { useState } from 'react'
import './CardButton.scss'

const CardButton = ({ isFollowing, setFollowingState }) => {
  const [followButtonText, setFollowButtonText] = useState(
    isFollowing ? 'Siguiendo' : 'Seguir'
  )
  const followButtonClass = isFollowing
    ? 'card__follow card__follow--following'
    : 'card__follow'

  const handleFollowingState = () => {
    setFollowingState(!isFollowing)
    setFollowButtonText(isFollowing ? 'Seguir' : 'Siguiendo')
  }

  return (
    <button
      onClick={() => handleFollowingState()}
      onMouseEnter={() =>
        setFollowButtonText(isFollowing ? 'Dejar de Seguir' : followButtonText)
      }
      onMouseLeave={() =>
        setFollowButtonText(isFollowing ? 'Siguiendo' : 'Seguir')
      }
      className={followButtonClass}
    >
      {followButtonText}
    </button>
  )
}

export default CardButton
