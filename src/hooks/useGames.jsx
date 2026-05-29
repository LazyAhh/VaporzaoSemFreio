

import { useEffect, useState } from "react"
import gamesService from "../services/gamesService"

const useGames = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchGames = async () => {
      try {

        setLoading(true)

        const data = await gamesService.getAll()

        setGames(data.itens)

      } catch (err) {

        setError(err)

      } finally {

        setLoading(false)

      }
    }

    fetchGames()

  }, [])

  return {
    games,
    loading,
    error,
  }
}

export default useGames