import React from "react";

export default function PokemonCard({PokemonData}) {
    if (!PokemonData) {
        return <div className="bg-white rounded-lg shadow-md p-4">Loading...</div>;
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
            <img src={PokemonData.sprites.front_default} className="w-50px h-auto mb-4" 
            alt={PokemonData.name}/>
            <img src={PokemonData.sprites.back_default} className="w-50px h-auto mb-4"
            alt={PokemonData.name}/>
            </div>
            <h2 className="text-x1 font semibold capitalize">
                {PokemonData.name}
            </h2>
            <p className="text-gray-700">ID: {PokemonData.id}</p>
            <p className="text-gray-700">Type: {PokemonData.types.map((type) => type.type.name).join(', ')}</p>
            <p className="text-gray-700">Abilities: {PokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        </div>

    )
}