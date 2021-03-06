export function setState(state) {
  return {
    type: 'SET_STATE',
    payload: {state}
  }
}

export function vote(entry) {
  return {
    type: 'VOTE',
    meta: {remote: true},
    payload: {entry}
  }
}

export function next(entry) {
  return {
    type: 'NEXT',
    meta: {remote: true}
  };
}