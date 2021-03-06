import React from 'react'
import ReactDOM from 'react-dom'
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate }
  from 'react-addons-test-utils'
import {expect} from 'chai'
import {Voting} from './Voting'

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["sublime", "emacs"]} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('sublime')
    expect(buttons[1].textContent).to.equal('emacs')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => votedWith = entry

    const component = renderIntoDocument(
      <Voting pair={["sublime", "emacs"]}
              vote={vote}/>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(votedWith).to.equal('sublime')
  })
  
  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={["sublime", "emacs"]} hasVoted="sublime" />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  })
  
  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={["sublime", "emacs"]} hasVoted="sublime" />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons[0].textContent).to.contain('Voted')
  })

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner="sublime" />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(0)

    const winner = ReactDOM.findDOMNode(component.refs.winner)
    expect(winner).to.be.ok
    expect(winner.textContent).to.contain('sublime')
  })
})