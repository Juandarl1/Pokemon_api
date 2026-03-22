import React from 'react'
import {useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
  // const [count, setCount] = useState(0)

  const [PokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchPokemons = async (id) => {
 try {
  const response = await fetch(`${BASE_URL}${id}`)
  const data =  await response.json()
  // console.log(data)
    // setPokemonData(data)
  setPokemonData((prevPokemonData) => [...prevPokemonData, data])
  console.log(PokemonData)

  
} catch (error) {
  console.error('Error fetching Pokemon data:', error)
}
}

  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
    fetchPokemons(i)
  }
  }, [fetchPokemons])

// const fetchAllPokemons = () => {
//   for (let i = 1; i <= 20; i++) {
//     fetchPokemons(i)
//   }
// }




  return (
    <div className='grid grid-cols-2 gap-4'>
      {PokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} PokemonData={pokemon} />
      ))}
     {/* <PokemonCard  PokemonData={PokemonData}/>
     <PokemonCard PokemonData={null}/>
     <PokemonCard PokemonData={null}/>
     <PokemonCard PokemonData={null}/> */}
    </div>
  )
}

export default App
