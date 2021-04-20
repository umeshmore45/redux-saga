import { Fragment, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getUser } from "../src/redux/user";

function App(props) {
  // const dispatch = useDispatch();

  console.log(props.state);

  useEffect(() => {
    props.getUser();
    // dispatch(getUser());
  }, []);

  return (
    <Fragment>
      <h1>{props.state.title}</h1>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser({}))
  };
};

const mapStateToProps = (state) => {
  return {
    state: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
