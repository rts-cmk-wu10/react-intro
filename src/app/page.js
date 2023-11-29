"use client"

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
    <main>
      <h1>Hej verden</h1>
      <button onClick={refreshHandler}>Refresh List</button>
      {pokemons.map(pokemon => <p>{pokemon.name}</p>)}
    </main>
  )
}
