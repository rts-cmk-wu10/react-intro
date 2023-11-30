"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [count, setCount] = useState(0)

  function refreshHandler() {
    setCount(count + 1)
  }

  useEffect(function() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        setPokemons(data.results)
      })
  }, [count])

  return (
    <>
      <h1 className="text-3xl">Pokemons</h1>
      <ul>
        {pokemons.map(pokemon => <li key={pokemon.name}><Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link></li>)}
      </ul>
    </>
  )
}
