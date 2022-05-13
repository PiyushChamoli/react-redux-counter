import { connect } from "react-redux";
import { Decrement, Increment, Reset } from "../store/action";

function Buttons(props) {
  return (
    <div className="btns">
      <button onClick={() => props.dispatch(Increment())}>Increment</button>
      <button onClick={() => props.dispatch(Decrement())}>Decrement</button>
      <button onClick={() => props.dispatch(Reset())}>Reset</button>
    </div>
  );
}

export default connect()(Buttons);
