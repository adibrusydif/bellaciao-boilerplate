import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  CastRequest: ['data'],
  CastSuccess: ['payload'],
  CastFailure: null,
})

export const CastTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const CastSelectors = {
  getData: (state) => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => ({
  ...state,
  fetching: true,
  payload: null,
})

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return { ...state, fetching: false, error: null, payload }
}

// Something went wrong somewhere.
export const failure = (state) => state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CAST_REQUEST]: request,
  [Types.CAST_SUCCESS]: success,
  [Types.CAST_FAILURE]: failure,
})
