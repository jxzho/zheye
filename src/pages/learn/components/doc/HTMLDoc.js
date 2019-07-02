import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Menu } from 'antd';
import "../../style.scss";
import api from "../../../../api";
import ReactMarkdown from "react-markdown";
import config from "./config";
const { cssDemo: demos } = config;
const { SubMenu } = Menu;

class HTMLDoc extends PureComponent {
  state = {
    content: "",
    menu: {
      children: []
    }
  };

  renderContent = () => (
    <div className="doc-detail-content">
      <div className="md-show-content">
        <ReactMarkdown source={this.state.content} />
      </div>
    </div>
  );

  handleClickMenuItem = ({ keyPath }) => {
    const child = keyPath[0];
    const { menu } = this.state;
    let item = menu.children.find(item => {
      return item.title === child;
    });
    if (!item) {
      item = demos.find(item => {
        return item.title === child;
      });
    }
    this.setState({ content: item.content });
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="html-doc-panel">
        <Menu
          defaultOpenKeys={["HTML"]}
          defaultSelectedKeys={['基础']}
          style={{ width: 256 }}
          mode="inline"
          onClick={this.handleClickMenuItem}
        >
          <SubMenu
            key="HTML"
            title={<span>{menu.title}</span>}
          >
            {menu.children.map((item, index) => (
              <Menu.Item key={item.title}>{item.title}</Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="案例练习"
            title="案例练习"
          >
            {demos.map((item, index) => (
              <Menu.Item key={item.title}>{item.title}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount() {
    api.getDocAll(3).then(res => {
      const data = res.data;
      if (data.result) {
        this.setState({
          menu: {
            title: "HTML",
            children: data.data
          }
        });
        this.handleClickMenuItem({ keyPath: ["基础", "HTML"] });
      }
    })
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