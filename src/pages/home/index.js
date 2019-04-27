import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Header from "../../common/header";
import Slide from "./components/Slide";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recorder from "./components/Recorder";
import { BackTop } from "antd";
import { actionCreators as action } from "./store";
import { actionCreators as practiceAction } from "../practice/store";

class Home extends PureComponent {
  render() {
    return (
      <div className="main-con">
        <Header />
        <HomeWrapper>
          <HomeLeft>
            <Slide />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recorder />
            <Recommend />
            <Writer />
          </HomeRight>
          <BackTop />
        </HomeWrapper>
      </div>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.props.clearDone();
  }
}

const mapState = null;
const mapDispatch = dispatch => ({
  changeHomeData: () => dispatch(action.changeHomeData()),
  clearDone: () => dispatch(practiceAction.clearDone())
});

export default connect(
  mapState,
  mapDispatch
)(Home);
