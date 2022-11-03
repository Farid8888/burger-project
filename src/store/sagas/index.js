import {takeEvery, all} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {logoutSaga, checkAuthTimeoutSaga,authUserSaga, authCheckStateSaga} from './auth'
import {initIngredientsSaga} from './burgerBuilder'
import {purchaseBurgerPostSaga, fetchOrdersSaga} from './order'


// export function* watchAuth(){
//     yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
//     yield takeEvery(actionTypes.AUTH_INITITATE_LOGOUT, logoutSaga)
//     yield takeEvery(actionTypes.AUTH_USER,authUserSaga)
//     yield takeEvery(actionTypes.AUTH_CHECK_STATE,authCheckStateSaga)
// }

export function* watchAuth(){
    yield all([
         takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
         takeEvery(actionTypes.AUTH_INITITATE_LOGOUT, logoutSaga),
         takeEvery(actionTypes.AUTH_USER,authUserSaga),
         takeEvery(actionTypes.AUTH_CHECK_STATE,authCheckStateSaga)
    ])
    
}


export function* watchBurgerBuilder(){
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}


export function* watchOrder(){
    yield takeEvery(actionTypes.PURCHASE_BURGER,purchaseBurgerPostSaga)
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
}

