

import { useState } from "react"

const useLibrary = () => {
  const [libraryGames, setLibraryGames] = useState([])

  const addToLibrary = (game) => {
    setLibraryGames((prev) => [...prev, game])
  }

  const removeFromLibrary = (gameId) => {
    setLibraryGames((prev) =>
      prev.filter((game) => game.id !== gameId)
    )
  }

  return {
    libraryGames,
    addToLibrary,
    removeFromLibrary,
  }
}

export default useLibrary