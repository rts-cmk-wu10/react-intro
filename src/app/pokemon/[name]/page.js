"use client"

import { useEffect, useState } from "react"

export default function Pokemon({ params }) {
    const [pokemon, setPokemon] = useState({})

    useEffect(function() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => res.json())
            .then(res => setPokemon(res))
    }, [])

    return (
        <>
            <img className="w-auto h-24" src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <h1 className="text-3xl capitalize text-norris">{pokemon.name}</h1>
            <p>Types: {pokemon.types?.map(elem => elem.type.name).join(", ")}</p>
            <p>Height: {pokemon.height}, weight: {pokemon.weight}</p>
            <p className="font-bold">Abilities</p>
            <ul>
                {pokemon.abilities?.map(elem => <li>{elem.ability.name}</li>)}
            </ul>
        </>
    )
}
