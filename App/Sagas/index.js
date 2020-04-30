import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'
import API from '../Services/Api'

import { CastTypes } from '../Stores/CastStore'
import { fetchCast } from './CastSaga'

const api = API.create()

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup, api),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(CastTypes.CAST_REQUEST, fetchCast, api),
  ])
}
