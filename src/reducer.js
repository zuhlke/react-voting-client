const setState = (state, newState) => {
  return Object.assign({}, state, newState)
}

const vote = (state, entry) => {
  if (state.vote && state.vote.pair && state.vote.pair.indexOf(entry) > -1) {
    return {
      ...state,
      hasVoted: entry
    }
  } else {
    return state
  }
}

const resetVote = (state) => {
  const currentPair = (state.vote && state.vote.pair) || []
  if (state.hasVoted && !currentPair.indexOf(state.hasVoted) > -1) {
    let newState = {...state}
    delete newState.hasVoted
    return newState
  } else {
    return state
  }
}

const reducer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'SET_STATE':
      return resetVote(setState(state, payload.state))
    case 'VOTE':
      return vote(state, payload.entry)
  }
  return state
}

export default reducer