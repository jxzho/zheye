import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import { Menu, Icon, Layout } from 'antd';
import UploadProblem from "../practice/upload";
import { Redirect } from "react-router-dom";
import Header from './components/Header';
const SubMenu = Menu.SubMenu;
const { Sider, Content } = Layout;

class Admin extends PureComponent {
  rootSubmenuKeys = ['user', 'article', 'problem', 'knowledge'];

  state = {
    openKeys: ['user'],
    activeContent: ""
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  renderContent = () => {
    const { activeContent } = this.state;
    switch (activeContent) {
      case "problem-upload":
        return <UploadProblem />
      default:
        return <div></div>;
    }
  };

  render() {
    const { auth } = this.props;
    console.log(auth);
    if (auth === 2) {
      return (
        <div className="admin-main-con">
          <Header />
          <Layout>
            <Sider style={{ width: "256px" }}>
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
                theme="dark"
              >
                <SubMenu
                  key="user"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>用户管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">Option 1</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="article"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>文章管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="problem"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>习题管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9" onClick={() => this.setState({ activeContent: "problem-upload" })}>上传</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="knowledge"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>知识管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="knowledge"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>首页管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content>
              {this.renderContent()}
            </Content>
          </Layout>
        </div>
      );
    } else {
      return <Redirect to="/login?type=admin" />
    }
  }
}

const mapState = state => ({
  auth: state.getIn(["user", "user", "auth"]),
  type: state.getIn(["login", "type"])
});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Admin));