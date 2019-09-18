import { AsyncStorage } from 'react-native'

export const saveSession = async id => AsyncStorage.setItem('session_id', id)

export const getSession = async () => AsyncStorage.getItem('session_id')

export const removeSession = async () => AsyncStorage.removeItem('session_id')
