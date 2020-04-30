import { put } from 'redux-saga/effects'
import CastActions from '../Stores/CastStore'
import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup(api) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(CastActions.CastRequest(api))

  // Add more operations you need to do at startup here
  // ...

  // When those operations are finished we redirect to the main screen
  yield NavigationService.navigateAndReset('MainScreen')
}
