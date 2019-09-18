import { genres } from './constants'

export const getGenresFromId = (arr) => {
  return arr.reduce((acc, elem) => {
    if (acc === '') return genres[elem]
    return `${acc}, ${genres[elem]}`
  }, '')
}
