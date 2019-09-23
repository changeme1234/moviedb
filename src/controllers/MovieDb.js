import { MOVIEDB_API_KEY } from '../config'
const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default class MovieDB {
  static async requestToken () {
    try {
      const {
        data: {
          request_token: requestToken,
        },
      } = await client.get(`/authentication/token/new?api_key=${MOVIEDB_API_KEY}`)
      return requestToken
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async login (username, password) {
    const requestToken = await MovieDB.requestToken()

    try {
      await client.post(
        `/authentication/token/validate_with_login?api_key=${MOVIEDB_API_KEY}`,
        { username, password, request_token: requestToken })
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }

    const { data } = await MovieDB.createSession(requestToken)

    return data.session_id
  }

  static async createSession (requestToken) {
    try {
      return client.post(
        `/authentication/session/new?api_key=${MOVIEDB_API_KEY}`,
        { request_token: requestToken }
      )
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async getWatchlist (sessionId, language = 'en-US') {
    try {
      const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=${MOVIEDB_API_KEY}&language=${language}&session_id=${sessionId}&sort_by=created_at.asc&page=1`)
      return results
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async getMovieDetail (id, language = 'en-US') {
    try {
      const { data } = await client.get(`/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=${language}`)
      return data
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async searchMovies (query, page = 1) {
    try {
      const { data: { results } } = await client.get(`/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}&page=${page}`)
      return results
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async getMovies (type, page = 1) {
    try {
      const { data: { results } } = await client.get(`/movie/${type}?api_key=${MOVIEDB_API_KEY}&page=${page}`)
      return results
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async addWatchlist (sessionId, movieId, list) {
    try {
      const { data } = await client.post(
        `/account/{account_id}/watchlist?api_key=${MOVIEDB_API_KEY}&session_id=${sessionId}`,
        {
          media_type: 'movie',
          media_id: movieId,
          watchlist: list,
        }
      )
      return data.status_message
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async getRatedMovies (sessionId) {
    try {
      const { data: { results } } = await client.get(`/account/${8681367}/rated/movies?api_key=${MOVIEDB_API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=1`)
      return results
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async addRating (sessionId, movieId, value) {
    try {
      const { data } = await client.post(
        `/movie/${movieId}/rating?api_key=${MOVIEDB_API_KEY}&session_id=${sessionId}`,
        {
          value,
        }
      )
      return data.status_message
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }

  static async deleteRating (sessionId, movieId) {
    try {
      const { data } = await client.delete(`/movie/${movieId}/rating?api_key=${MOVIEDB_API_KEY}&session_id=${sessionId}`)
      return data
    } catch (err) {
      throw (getErrorMessage(err.response.data))
    }
  }
}

const getErrorMessage = (obj) => {
  switch (obj.status_code) {
  case 7: return 'Invalid API setup'
  case 26: return obj.status_message
  default: return 'API Unhandled error'
  }
}
