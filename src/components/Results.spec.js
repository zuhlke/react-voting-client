import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils'
import {Results} from './Results'
import {expect} from 'chai'

describe('Results', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = ['sublime', 'emacs']
    const tally = {'sublime': 5}
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    )
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    const [sublime, emacs] = entries.map(e => e.textContent)

    expect(entries.length).to.equal(2)
    expect(sublime).to.contain('sublime')
    expect(sublime).to.contain('5')
    expect(emacs).to.contain('emacs')
    expect(emacs).to.contain('0')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true

    const pair = ['sublime', 'emacs']
    const component = renderIntoDocument(
      <Results pair={pair}
               tally={{}}
               next={next}/>
    )
    Simulate.click(ReactDOM.findDOMNode(component.refs.next))

    expect(nextInvoked).to.equal(true)
  })

  it('renders the winner when there is one', () => {
    const component = renderIntoDocument(
      <Results winner="sublime"
              pair={["sublime", "emacs"]}
              tally={{}} />
    );
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('sublime');
  });

})