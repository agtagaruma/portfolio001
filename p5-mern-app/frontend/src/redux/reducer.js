import axios from 'axios'

const initialState = {
    physicians : []
}

const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case 'ADD_PHYSICIAN':
        const newPhysician = action.payload;
        axios.post('http://localhost:8444/api/v1/auth/register', newPhysician).then(result => {
            alert(result.data.status);
        });
        return { ...state, physicians : [...state.physicians, newPhysician ]}

  default:
    return state
  }
}

export default reducer