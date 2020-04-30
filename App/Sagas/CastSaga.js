import { put, call } from 'redux-saga/effects'
import CastActions from '../Stores/CastStore'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchCast(api) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  // Fetch user informations from an API
  const response = yield call(api.getCast)
  if (response.ok) {
    yield put(CastActions.CastSuccess(response.data))
  } else {
    yield put(CastActions.CastFailure('There was an error while fetching user informations.'))
  }
}
