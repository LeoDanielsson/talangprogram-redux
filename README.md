# Excercises

To start the app:

```
npm install
npm start
```

## 1

A. In index.js, create a redux store, using the reducer in reducer.js

B. Wrap the App with a react-redux Provider, holding the store

C. Optional: Add redux-dev-tools (https://github.com/zalmoxisus/redux-devtools-extension)

## 2

A. Define an action type LOG_IN in actionTypes.js

B. Define an action creator logIn in actions.js

C. In reducer.js, handle the LOG_IN action, so that the state contains the logged in user name.

D. Connect Login.js to the state, using react-redux

E. Display the user name from the state if it set

F. Dispatch the logIn action when the login form is submitted

G. Dispatch the logOut action when the logout button is clicked

H. On Page.js, show a welcome message containing the user's name

## 3

A. Define todos as an empty array on the initial state.

B. Connect TodoList to the state, and use state.todos instead of react state.

C. Create an addTodo action, and implement it in the reducer

D. Create a removeTodo action, and implement it in the reducer

E. Split user and todo state into different reducers and use combineReducers to combine them

## 4 (advanced!)

This section uses async actions, which wasn't included in the slides.
See here for a guide: https://redux.js.org/advanced/async-actions#async-actions

A. Add the thunk middleware to the Redux store

B. Add an async action creator "fetchDogs" that fetches dog breeds from https://dog.ceo/api/breeds/list/all

C. After the response is fetched, dispatch a "DOGS_FETCHED" action, updating the state with dogs

D. Create a component with a "Fetch dogs" button, which dispatches the fetchDogs action, and displays the results.

E. Add a loading state to the dogs list. (You will need to fire a START_FETCHING_DOGS action before making the API call)

F. Handle errors from the API (add a FETCH_DOGS_FAILED action)

```

```
