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
    return state;
  }
}

const reducer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'SET_STATE':
      return setState(state, payload.state)
    case 'VOTE':
      return vote(state, payload.entry);
  }
  return state
}

export default reducer