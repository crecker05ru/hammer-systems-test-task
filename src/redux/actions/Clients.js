import {ASYNC_FETCH_CLIENTS,FETCH_CLIENTS_START,FETCH_CLIENTS_SUCCESS,FETCH_CLIENTS_ERROR} from '../constants/Clients'

export const fetchClientsStart = () => {
  return {
    type: FETCH_CLIENTS_START,
    payload: true
  }
}
export const fetchClientsSuccess = (data) => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    payload: data
  }
}
export const fetchClientsError = (e) => {
  return {
    type: FETCH_CLIENTS_ERROR,
    payload: e
  }
}

export const asyncFetchClients = () => ({ type: ASYNC_FETCH_CLIENTS })
export const fetchClients = async () => {
  return async (dispatch) => {
    try {
      dispatch(fetchClientsStart())
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response
      dispatch(fetchClientsSuccess(data))
    }catch(e){
      dispatch(fetchClientsError(e))
    }
  }
  
};