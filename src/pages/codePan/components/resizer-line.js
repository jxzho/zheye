import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store"

let resizer = '';

class ResizerLine extends PureComponent {
  getCurrentEle = (lan) => {
    const curEle = document.querySelector(`.code-${lan.toLowerCase()}`);
    return curEle;
  };

  getNextEle = (ele) => {
    const nextEle = ele.nextElementSibling;
    if (nextEle.style.display === 'none') {
      return this.getNextEle(nextEle);
    } else {
      return nextEle;
    }
  };

  handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseUp = (e) => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseMove = e => {
    const win = document.documentElement || document.body;
    const winX = win.offsetWidth;
    const curWidth = e.clientX / winX * 100;
    console.log(curWidth);

    const curEle = this.getCurrentEle(this.props.lan);
    const nextEle = this.getNextEle(curEle);
    
    curEle.style.right = `${100 - curWidth}%`;
    nextEle.style.left = `${curWidth}%`;
  }

  render() {
    return (
      <div className="panel-resizer-line"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        ref={ref => resizer = ref}
      />
    )
  }
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  changeLanWidth: (data) => dispatch(actionCreators.changeLanWidth(data))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(ResizerLine));