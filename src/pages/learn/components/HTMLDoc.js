import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Menu } from 'antd';
import "../style.scss";
import config from "../config";
const { SubMenu } = Menu;
const { routeMenus } = config;

class HTMLDoc extends PureComponent {
  state = {
    content: ""
  };

  renderContent = () => {
    return (
      <div className="menu-content">
        {this.state.content}
      </div>
    )
  };

  handleClickMenuItem = ({ keyPath }) => {
    const findItem = routeMenus.find(item => {
      return item.title === keyPath[1];
    }).children.find(item => {
      return item.title === keyPath[0];
    });
    this.setState({
      content: findItem.content
    });
  };

  render() {
    return (
      <div className="learn-route-panel">
        <Menu
          style={{ width: 256 }}
          mode="inline"
          onClick={this.handleClickMenuItem}
        >
          {routeMenus.map((item, index) => {
            return (
              <SubMenu
                key={item.title}
                title={
                  <span>{item.title}</span>
                }
              >
                {item.children.map((item, index) => (
                  <Menu.Item key={item.title}>{item.title}</Menu.Item>
                ))}
              </SubMenu>
            )
          })}
        </Menu>
        {this.renderContent()}
      </div>
    )
  }
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(HTMLDoc);