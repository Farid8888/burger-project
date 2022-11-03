import reducer from './auth'
import * as actionsTypes from '../actions/actionTypes'


describe('auth reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({
    userId:null,
    token:null,
    error:null,
    loading:false,
    authRedirectpath:'/'
        })
    })
    it('should return the initial state WITH TOKEN',()=>{
        expect(reducer({
            userId:null,
            token:null,
            error:null,
            loading:false,
            authRedirectpath:'/'
        },{
       type:actionsTypes.AUTH_SUCCESS,
       idToken:'some-token',
       userId:'some-user-id'
        })).toEqual({
    userId:'some-user-id',
    token:'some-token',
    error:null,
    loading:false,
    authRedirectpath:'/'
        })
    })
})

