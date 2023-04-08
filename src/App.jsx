import React from 'react'
import Card from './components/Card/Card.jsx'
import './App.scss'

const App = () => {
  return (
    <main className='main'>
      <h1 className='main__title'>Twitter Follow Card</h1>
      <aside className='card-groups'>
        <Card userName='gab14_' name='Gabo' isFollowing />
        <Card userName='react' name='React' />
        <Card userName='vite' name='Vite' />
        <Card userName='eslint' name='Eslint' isFollowing />
      </aside>
    </main>
  )
}

export default App
