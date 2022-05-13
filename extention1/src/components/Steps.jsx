import { connect } from "react-redux";
import { ChangeStep } from "../store/action";

function Steps(props) {
  return (
    <div className="stp">
      <button
        className={props.step === 5 && "active"}
        onClick={() => props.dispatch(ChangeStep(5))}
      >
        5
      </button>
      <button
        className={props.step === 10 && "active"}
        onClick={() => props.dispatch(ChangeStep(10))}
      >
        10
      </button>
      <button
        className={props.step === 15 && "active"}
        onClick={() => props.dispatch(ChangeStep(15))}
      >
        15
      </button>
    </div>
  );
}

function MapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(MapStateToProps)(Steps);
