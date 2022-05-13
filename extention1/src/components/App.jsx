import { connect } from "react-redux";
import Buttons from "./Buttons";
import Steps from "./Steps";

function App(props) {
  return (
    <div className="container">
      <h1>{props.value}</h1>
      <Steps />
      <Buttons />
    </div>
  );
}

function MapStateToProps(state) {
  return {
    value: state.value,
  };
}

export default connect(MapStateToProps)(App);
