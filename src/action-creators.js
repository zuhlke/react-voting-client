export function setState(state) {
  return {
    type: 'SET_STATE',
    payload: {state}
  };
}

export function vote(entry) {
  return {
    type: 'VOTE',
    payload: {entry}
  };
}