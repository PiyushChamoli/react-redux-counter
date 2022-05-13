import { connect } from "react-redux";
import { changeStep } from "../store/action";

function Steps(props) {
  return (
    <div className="stp">
      <h2>Steps</h2>
      <button
        className={props.step === 5 && "active"}
        onClick={() => props.dispatch(changeStep(5))}
      >
        5
      </button>
      <button
        className={props.step === 10 && "active"}
        onClick={() => props.dispatch(changeStep(10))}
      >
        10
      </button>
      <button
        className={props.step === 15 && "active"}
        onClick={() => props.dispatch(changeStep(15))}
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
