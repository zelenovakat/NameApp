export const removeFavoriteKids = favoriteChildId => {
  console.log(favoriteChildId)
  const favoriteKidsWithoutOne = favoriteKids.filter(
    favoriteChild => favoriteChild.id !== favoriteChildId
  )
  setFavoriteKids(favoriteKidsWithoutOne)
}
