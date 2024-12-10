import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

export default function SideNav(props){
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, handleToggleMenu, showSideMenu }  = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        
        //if full pokedex number inclues the current search value, return true

        if((getFullPokedexNumber(eleIndex)).toLowerCase().includes
        (searchValue)){ return true }

        //if the pokemon name includes the current search value, return true

        if(ele.toLowerCase().includes(searchValue)) { return true }
        //otherwise, exclude from array

        return false
    })


    return(
        <nav className={' ' + (!showSideMenu ? " open" : '')}>
            <div className={"header " + (!showSideMenu ? " open" : '')}> 
                <button onClick={handleToggleMenu} className="open-nav-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input placeholder={'E.g. 001 or Bulbasaur'} value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }}  />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return(
                    <button key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? ' nav-card-selected': ' ')} 
                            onClick={() => {
                                setSelectedPokemon(truePokedexNumber)
                                handleCloseMenu()
                                }}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}