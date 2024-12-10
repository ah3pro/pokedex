import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(14)
  const [showSideMenu, setShowSideMenu] = useState(false)

  function handleToggleMenu(){
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu(){
    setShowSideMenu(!showSideMenu)
  }

  return (
    <>
      <Header   handleToggleMenu={handleToggleMenu}/>
      <SideNav  showSideMenu={showSideMenu} 
                selectedPokemon={selectedPokemon} 
                setSelectedPokemon={setSelectedPokemon}
                handleToggleMenu={handleToggleMenu}
                handleCloseMenu={handleCloseMenu}/>
      <PokeCard selectedPokemon={selectedPokemon}/>


    </>
  )
}

export default App
