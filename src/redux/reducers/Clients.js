import {FETCH_CLIENTS_START,FETCH_CLIENTS_SUCCESS,FETCH_CLIENTS_ERROR} from '../constants/Clients'

const initState = {
  clients: [],
  loading: false,
  error: '',
}

const clients = (state = initState, action) => {
	switch (action.type) {
		case FETCH_CLIENTS_START:
			return {
				...state,
				loading: true,
			}
		case FETCH_CLIENTS_SUCCESS: 
			return {
				...state,
				clients: action.payload,
				loading: false
			}
		case FETCH_CLIENTS_ERROR: 
			return {
				...state,
				error: action.payload,
				loading: false
			}
		
		default:
			return state;
	}
}

export default clients