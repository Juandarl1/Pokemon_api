import React from "react";

export default function PokemonCard() {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div>
            <h2 className="text-xl font-bold mb-2">Pokemon Name</h2>
            <img src="pokemon-image-url" alt="Pokemon Name" className="w-full h-auto mb-4" />
            </div>
            <h2 className="text-x1 font semibold capitalize">
                Nombre
            </h2>
            <p className="text-gray-700">ID: Pokemon ID</p>
            <p className="text-gray-700">Type: Pokemon Type</p>
            <p className="text-gray-700">Abilities: Pokemon Abilities</p>
        </div>

    )
}