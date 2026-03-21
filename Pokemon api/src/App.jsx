import React from 'react'
import {useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
  // const [count, setCount] = useState(0)

  const [PokemonData, setPokemonData] = useState(null)
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



const fetchPokemons = async (id) => {
 try {
  const response = await fetch(`${BASE_URL}${id}`)
  const data =  await response.json()
  console.log(data)
  setPokemonData(data)

  
} catch (error) {
  console.error('Error fetching Pokemon data:', error)
}
}

const fetchAllPokemons = () => {
  for (let i = 0; i <= 20; i++) {
    fetchPokemons(i)
  }
}

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    fetchPokemons(1)
  }, [])


  return (
    <div className='grid grid-cols-2 gap-4'>
     <PokemonCard  PokemonData={PokemonData}/>
     <PokemonCard PokemonData={null}/>
     <PokemonCard PokemonData={null}/>
     <PokemonCard PokemonData={null}/>
    </div>
  )
}

export default App
