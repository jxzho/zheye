import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Area } from "../style";
import { actionCreators as forumAction } from '../store'

const Tabs = {
  所有: "all",
  JS: 'javascript',
  HTML: 'html',
  CSS: 'css',
  REACT: 'react',
  VUE: 'vue',
};

class Header extends PureComponent {
  state = {
    activeText: "所有"
  };

  handleTabClick = text => {
    this.setState({
      activeText: text
    });
    this.props.changeType(Tabs[text]);
  };

  render() {
    return (
      <Area className="tabs-warpper">
        <ul>
          {Object.keys(Tabs).map(item => (
            <li
              className={item === this.state.activeText ? "active" : ""}
              key={item}
              onClick={this.handleTabClick.bind(null, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </Area>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  changeType: type => dispatch(forumAction.changeType(type))
});

export default connect(
  mapState,
  mapDispatch
)(Header);
