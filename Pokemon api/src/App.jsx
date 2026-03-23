import React from 'react'
import {useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
  // const [count, setCount] = useState(0)

  const [PokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



// // eslint-disable-next-line react-hooks/exhaustive-deps
// const fetchPokemons = async (id) => {
//  try {
//   const response = await fetch(`${BASE_URL}${id}`)
//   const data =  await response.json()
//   // console.log(data)
//     // setPokemonData(data)
//   setPokemonData((prevPokemonData) => [...prevPokemonData, data])
//   console.log(PokemonData)

  
// } catch (error) {
//   console.error('Error fetching Pokemon data:', error)
// }
// }

useEffect(() => {
  const fetchAllPokemons = async () => {
    try {
      const requests = []
      for (let i = 1; i <= 105; i++) {
        requests.push(fetch(`${BASE_URL}${i}`).then((r) => r.json()))
      }
      const results = await Promise.all(requests)
      setPokemonData(results)
    } catch (error) {
      console.error('Error fetching Pokemon data:', error)
    }
  }

  fetchAllPokemons()
}, [])


  return (

       <><header className='bg-blue-500 text-white col-span-3 font-bold font-family: Arial, sans-serif;  text-left mb-4'>
        <h1 className='text-3xl font-bold'>Pokemon API</h1>
      </header>
    
    <div className='grid grid-cols-3 gap-4 p-4'>



        {PokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} PokemonData={pokemon} />
        ))}
        {/* <PokemonCard  PokemonData={PokemonData}/>
    <PokemonCard PokemonData={null}/>
    <PokemonCard PokemonData={null}/>
    <PokemonCard PokemonData={null}/> */}
      </div>
      
      </>
  )
}

export default App
