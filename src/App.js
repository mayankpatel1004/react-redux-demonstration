import './App.css';
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