React, redux and ES6 workshop.

Based on the excellent Fullstack Redux tutorial by Tero Parvianen @teropa

Once you have completed the workshop or if you want something more challengin try these exercises:

## 1. Invalid Vote Prevention
The server should not allow entries to be voted if they are not included in the current pair. Add a failing unit test to illustrate the problem and then fix the logic.

## 2. Improved Vote State Reset
The client currently resets the hasVoted state when the new voted pair does not include the entry that was voted. This has one major problem: If two consecutive pairs include the same entry, which will always happen during the last rounds of the vote, the state is not reset. The user can't vote on the last round because their buttons are disabled!

Modify the system so that it creates a unique identifier for each round of votes instead, and the voted state is tracked based on this round id.

Hint: Track a running counter of rounds on the server. When a user votes, save the current round number in the client state. When the state updates, reset the voted state if the round number has changed.

## 3. Duplicate Vote Prevention
A user can still vote several times during the same round, if they just refresh the page, because their voted state is lost. Fix this.

Hint: Generate unique identifiers for each user and keep track of who has voted what on the server, so that if a user votes again, their previous vote for the round is nullified. If you do this, you can also skip the disabling of the voting buttons, since it is possible for the user to change their mind during the round.


## 4. Restarting The Vote
Implement a button to the results screen that allows the user to start the voting from the beginning.

Hint: You need to keep track of the original entries in the state, and reset back to them.


## 5. Indicating Socket Connection State
When connectivity is poor, Socket.io may not be immediately and always connected. Add a visual indicator that tells the user when they're not connected.

Hint: Listen to connection events from Socket.io and dispatch actions that put the connection state in the Redux store.

## Bonus Challenge: Going Peer to Peer
Modify the logic of the system so that instead of having separate implementations of reducers on the client and server, the full voting logic reducer runs on each client. Dispatch all actions to everyone, so that everyone sees the same thing.

How do you make sure everyone receives all actions and receives them in the correct order?

In this architecture, is there necessarily a need for a server at all? Could you go fully P2P using WebRTC? (With Socket.io P2P perhaps)
