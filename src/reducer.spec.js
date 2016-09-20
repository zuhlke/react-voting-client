import {expect} from 'chai'

import reducer from './reducer'

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = {}
    const action = {
      type: 'SET_STATE',
      payload: { state: { vote: {
            pair: ['sublime', 'emacs'],
            tally: {sublime: 1}
      }}}
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal({
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      }
    })
  })

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      payload: { state: { vote: {
            pair: ['sublime', 'emacs'],
            tally: {sublime: 1}
      }}}
    }
    const nextState = reducer(undefined, action)

    expect(nextState).to.deep.equal({
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      }
    })
  })

})