import { connect } from "react-redux";
import { decrement, increment, reset } from "../store/action";

function Buttons(props) {
  return (
    <div className="btns">
      <button onClick={() => props.dispatch(increment())}>Increment</button>
      <button onClick={() => props.dispatch(decrement())}>Decrement</button>
      <button onClick={() => props.dispatch(reset())}>Reset</button>
    </div>
  );
}

export default connect()(Buttons);
