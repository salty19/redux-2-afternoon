import axios from 'axios' 


const initialState = {
     email: null,
     firstName: null,
     lastName: null
}


export default function reducer(state = initialState, action) {

    return state
}


const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserdata() {
    let data = axios.get('/auth/user-data')
    .then

    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}