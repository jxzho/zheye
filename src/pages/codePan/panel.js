import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CodeCss from "./code/css";
import CodeHtml from "./code/html";
import CodeJS from "./code/js";
import Console from "./code/console";
import CodeOutput from "./code/result";
import { actionCreators } from "./store";

class Panel extends PureComponent {
  handleChangeWidth = (data) => {
    this.setState(data);
  };

  render() {
    const { activeLan } = this.props;
    return (
      <main>
        <CodeHtml invisible={activeLan.indexOf("HTML") !== -1} />
        <CodeCss invisible={activeLan.indexOf("CSS") !== -1} />
        <CodeJS invisible={activeLan.indexOf("JS") !== -1} />
        <Console invisible={activeLan.indexOf("Console") !== -1} />
        <CodeOutput invisible={activeLan.indexOf("Output") !== -1} />
      </main>
    )
  }

  // initStyle = (index, len) => {
  //   const style = {
  //     left: `${index * len}%`,
  //     right: `${100 - index * len - len}%`
  //   }
  //   return style;
  // }

  componentDidMount() {
    const { activeLan } = this.props;
    const len = 1 / activeLan.length * 100;
    activeLan.forEach((item, index) => {
      const right = (activeLan.length - index - 1) * len;
      const left = len * (activeLan.length - 1) - right;
      const curEle = document.querySelector(`.code-${item.toLowerCase()}`);
      curEle.style.left = `${left}%`;
      curEle.style.right = `${right}%`;
    });
  }
}

const mapState = state => ({
  activeLan: state.getIn(['codePan', 'activeLan'])
});

const mapDispatch = dispatch => ({
  changeLanWidth: (data) => dispatch(actionCreators.changeLanWidth(data))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Panel));