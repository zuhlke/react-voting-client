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

  it('handles VOTE by setting hasVoted', () => {
    const state = {
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      }
    }
    const action = {type: 'VOTE', payload: {entry: 'sublime'}}
    const nextState = reducer(state, action)

    expect(nextState).to.deep.equal({
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      },
      hasVoted: 'sublime'
    })
  })

  it('does not set hasVoted for VOTE on invalid entry', () => {
    const state = {
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      }
    }
    const action = {type: 'VOTE', payload: {entry: 'vim'}}
    const nextState = reducer(state, action)

    expect(nextState).to.deep.equal({
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      }
    })
  })

  it('removes hasVoted on SET_STATE if pair changes', () => {
    const initialState = {
      vote: {
        pair: ['sublime', 'emacs'],
        tally: {sublime: 1}
      },
      hasVoted: 'sublime'
    }
    const action = {
      type: 'SET_STATE',
      payload: {
        state: {
          vote: {
            pair: ['vim', 'TextMate']
          }
        }
      }
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal({
      vote: {
        pair: ['vim', 'TextMate']
      }
    })
  })

})