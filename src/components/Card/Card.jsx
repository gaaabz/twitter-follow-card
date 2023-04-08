import { useState } from 'react'
import './Card.scss'
import CardButton from '../CardButton/CardButton.jsx'

const Card = ({ userName, name, isFollowing = false }) => {
  const [followingState, setFollowingState] = useState(isFollowing)
  const imageSrc = `https://unavatar.io/${userName}`
  const followClass = followingState ? 'card card--following' : 'card'

  return (
    <div className={followClass}>
      <img className='card__avatar' src={imageSrc} alt={`Avatar de ${name}`} />
      <div className='card__info'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__username'>{`@${userName}`}</p>
      </div>
      <CardButton
        isFollowing={followingState}
        setFollowingState={setFollowingState}
      />
    </div>
  )
}

export default Card
