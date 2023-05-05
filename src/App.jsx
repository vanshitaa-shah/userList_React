import React from 'react'
import './App.css'
import UserCard from './components/UserCard/UserCard'
import UserList from './components/UserList/UserList'

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <UserList />
        <UserCard />
      </div>
    </div>
  )
}

export default App