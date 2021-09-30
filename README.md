# Getting Started with Create React App

Create a project with this command : npx create-react-app reactredux

Install redux library and link with react : npm install redux react-redux


Go to your directory : cd reactredux
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Create directory name actions (index.js)`

Below code will be in index.js under actions directory

```bash
export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
```

### `Create directory name reducers (index.js)`

Below code will be in index.js under reducers directory

```bash
import changeTheNumber from './upDown';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer;
```

create one more file name upDown.js under reducers directory and paste the following

```bash
const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;
```

### `Create a file name store.js`

```bash
import { createStore } from "redux";
import rootReducer from './reducers/index';
const store = createStore(rootReducer);
export default store;
```

### `Create a file name index.js`

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

```



### `Create a file name app.js`

```bash
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <a onClick={() => dispatch(decNumber())}>Decrement</a>
      <input type="text" name="quantity" value={myState} />
      <a onClick={() => dispatch(incNumber())}>Increment</a>
    </div>
  );
}
export default App;
```
