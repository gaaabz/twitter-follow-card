import React from 'react'
import Card from './components/Card/Card.jsx'
import './App.scss'

const App = () => {
  const users = [
    { id: 1, userName: 'gab14_', name: 'Gabo', isFollowing: true },
    { id: 2, userName: 'react', name: 'React', isFollowing: false },
    { id: 3, userName: 'vite', name: 'Vite', isFollowing: false },
    { id: 4, userName: 'eslint', name: 'Eslint', isFollowing: true }
  ]

  return (
    <main className='main'>
      <h1 className='main__title'>Twitter Follow Card</h1>
      <aside className='card-groups'>
        {users.map(user => (
          <Card
            key={user.id}
            userName={user.userName}
            name={user.name}
            isFollowing={user.isFollowing}
          />
        ))}
      </aside>
    </main>
  )
}

export default App
