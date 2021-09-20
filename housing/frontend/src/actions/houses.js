import axios from 'axios';

import { GET_HOUSES, DELETE_HOUSE, ADD_HOUSE } from './types';

//GET HOUSES
export const getHouses = () => dispatch => {
    axios.get('/api/houses')
        .then(res => {
            dispatch({
                type: GET_HOUSES,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

//DELETE HOUSE
export const deleteHouse = (id) => dispatch => {
    axios
        .delete(`/api/houses/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_HOUSE,
                payload: id
            })
        })
        .catch(err => console.log(err));
}

// ADD HOUSE
export const addHouse = house => dispatch => {
    axios
      .post('/api/houses/', house)
      .then((res) => {
        dispatch({
          type: ADD_HOUSE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };