import { connect } from "react-redux";
import { updateMaxValue } from "../store/action";

function Steps(props) {
  return (
    <div className="stp">
      <h2>Max Value</h2>
      <button
        className={props.maxvalue === 15 && "active"}
        onClick={() => props.dispatch(updateMaxValue(15))}
      >
        15
      </button>
      <button
        className={props.maxvalue === 100 && "active"}
        onClick={() => props.dispatch(updateMaxValue(100))}
      >
        100
      </button>
      <button
        className={props.maxvalue === 200 && "active"}
        onClick={() => props.dispatch(updateMaxValue(200))}
      >
        200
      </button>
    </div>
  );
}

function MapStateToProps(state) {
  return {
    maxvalue: state.maxvalue,
  };
}

export default connect(MapStateToProps)(Steps);
