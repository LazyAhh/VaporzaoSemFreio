

import { useEffect, useState } from "react"

import gamesService from "../services/gamesService"

const useFeaturedGames = () => {
  const [featuredGames, setFeaturedGames] = useState({
    recentes: [],
    topAvaliados: [],
    populares: [],
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchFeaturedGames = async () => {
      try {

        setLoading(true)

        const data = await gamesService.getFeatured()
        console.log(data)
        setFeaturedGames(data)

      } catch (err) {
        console.log(err)
        setError(err)

      } finally {

        setLoading(false)

      }
    }

    fetchFeaturedGames()

  }, [])

  return {
    featuredGames,
    loading,
    error,
  }
}

export default useFeaturedGames