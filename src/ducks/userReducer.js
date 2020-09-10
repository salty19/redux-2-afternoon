import axios from 'axios' 


const initialState = {
     email: null,
     firstName: null,
     lastName: null
}


 // THE BELOW CODE COULD WORK IN PLACE OF .then BELOW:
 // case REQUEST_USER_DATA + '_PENDING':
 //     return {...state, loading: true}
 // case REQUEST_USER_DATA + '_FULFILLED':
 //     return {...state, loading: false,      purchases: action.payload.data}
 // case REQUEST_USER_DATA + '_REJECTED':
 //     return {...state, loading: false}
 // default:
 //     return state

 const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

 export function requestUserData() {
     let data = axios.get('/auth/user-data')
     .then(res => res.data)
 
     return {
         type: REQUEST_USER_DATA,
         payload: data
     }
 }

 

export default function reducer(state = initialState, action) {
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            return { email, firstName, lastName }
        default:
            return state 
    }
}

