import React from "react";

export default function PokemonCard({ PokemonData }) {
    if (!PokemonData || !PokemonData.sprites) {
            return <div>Loading...</div>;
        }
    return (
        
        <div className="bg-white rounded-lg flex shadow-md p-4 flex-col items-center">
            
           

            <div className="flex flex-col items-center text-transform: uppercase">
                <h2 className="text-xl font-bold mb-2">{PokemonData.name}</h2>

                <div className="flex space-x-4">
                    <img src={PokemonData.sprites.front_default} alt={PokemonData.name} className=" w-20 h-auto mb-4" />
                    <img src={PokemonData.sprites.back_default} alt={PokemonData.name} className=" w-20 h-auto mb-4" />
                </div>

             </div>

            <p className="text-gray-700">ID: {PokemonData.id}</p>
            <p className="text-gray-700">Type: {PokemonData.types[0].type.name}</p>
            <p className="text-gray-700">Abilities: {PokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>

    )
}