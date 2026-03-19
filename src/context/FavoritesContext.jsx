import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

const STORAGE_KEY = 'profix_favorites'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(loadFromStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggle = (serviceId) => {
    setFavoriteIds(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const remove = (serviceId) => {
    setFavoriteIds(prev => prev.filter(id => id !== serviceId))
  }

  const clear = () => setFavoriteIds([])

  const isFavorite = (serviceId) => favoriteIds.includes(serviceId)

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggle, remove, clear, isFavorite, count: favoriteIds.length }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
