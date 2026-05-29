

import { useEffect, useState } from "react"

const useGenres = () => {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true)

        // futura integração API
        // const response = await genresService.getAll()

        setGenres([])

      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchGenres()
  }, [])

  return {
    genres,
    loading,
    error,
  }
}

export default useGenres