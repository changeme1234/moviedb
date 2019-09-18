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
}

const getErrorMessage = (obj) => {
  switch (obj.status_code) {
  case 7: return 'Invalid API setup'
  case 26: return obj.status_message
  default: return 'Something went wrong'
  }
}
