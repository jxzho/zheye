import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Lan extends PureComponent {
  state = {
    items: {
      0: {
        lan: "HTML",
        show: true
      },
      1: {
        lan: "CSS",
        show: true
      },
      2: {
        lan: "JS",
        show: true
      },
      3: {
        lan: "Console",
        show: false
      },
      4: {
        lan: "Output",
        show: true
      }
    }
  }

  getActiveLan = () => {
    const { items } = this.state;
    return Object.values(items).filter(item => item.show);
  };

  getCurrentEle = (lan) => {
    const curEle = document.querySelector(`.code-${lan.toLowerCase()}`);
    return curEle;
  };

  getNextEle = (ele) => {
    const nextEle = ele.nextElementSibling;
    if (nextEle.style.display === 'none') {
      this.getNextEle(nextEle);
    } else {
      return nextEle;
    }
  };

  changeStyle = () => {
    setTimeout(() => {
      const activeLan = this.getActiveLan();
      const len = 1 / activeLan.length * 100;
      activeLan.forEach((item, index) => {
        const right = (activeLan.length - index - 1) * len;
        const left = len * (activeLan.length - 1) - right;
        const curEle = document.querySelector(`.code-${item.lan.toLowerCase()}`);
        curEle.style.left = `${left}%`;
        curEle.style.right = `${right}%`;
      });
    }, 0);
  }

  handleItemClick = (lan, index) => {
    const { items } = this.state;
    const lans = { ...items };

    const findItem = Object.values(lans).find(item => item.lan === lan);
    if (findItem.show) {
      findItem.show = false;
    } else {
      findItem.show = true;
    }
    this.setState({ items: lans });
    this.props.changeActiveLan(this.getActiveLan().map(item => item.lan));
    this.changeStyle();
  }

  render() {
    const { items } = this.state;
    const lans = Object.values(items);
    return (
      <ul className="btn-lan-list" key={lans.length}>
        {lans.map(item => item.lan).map((item, index) => {
          return (
            <li
              className={Object.values(items).find(find => find.lan === item).show ? "btn-lan-item active" : "btn-lan-item"}
              key={item + index}
              onClick={this.handleItemClick.bind(null, item, index)}
            >
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapState = state => ({
  activeLan: state.getIn(["codePan", "activeLan"])
});

const mapDispatch = dispatch => ({
  changeActiveLan: (ary) => dispatch(actionCreators.changeActiveLan(ary))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Lan));