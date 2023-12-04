"use client"

import PokelistItem from "@/components/pokelist-item"
import { useEffect, useState } from "react"

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(function() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        setPokemons(data.results)
      })
  }, [])

  return (
    <>
      <h1 className="text-3xl">Pokemons</h1>
      <ul>
        {pokemons.map(pokemon => <PokelistItem name={pokemon.name} />)}
      </ul>
    </>
  )
}
