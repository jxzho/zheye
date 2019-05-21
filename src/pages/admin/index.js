import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import { Menu, Icon, Layout } from 'antd';
import UserList from "../admin/components/Users";
import ArticleList from "../admin/components/Articles";
import UploadProblem from "../practice/upload";
import UploadDoc from "../learn/components/upload";
import DocEdit from "../learn/components/edit";
import { Redirect } from "react-router-dom";
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
      case "user-list":
        return <UserList />
      case "art-list":
        return <ArticleList />
      case "problem-upload":
        return <UploadProblem />
      case "problem-edit":
        return "123"
      case "doc-upload":
        return <UploadDoc />
      case "doc-edit":
        return <DocEdit />
      default:
        return null;
    }
  };

  render() {
    const { auth } = this.props;
    if (auth === 2) {
      return (
        <div className="admin-main-con">
          <Layout>
            <Sider style={{ width: "256px" }}>
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
                theme="dark"
                onClick={({ key }) => {
                  this.setState({ activeContent: key })
                }}
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
                  <Menu.Item key="user-list">列表</Menu.Item>
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
                  <Menu.Item key="art-list">列表</Menu.Item>
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
                  <Menu.Item key="problem-upload">上传</Menu.Item>
                  <Menu.Item key="problem-edit">编辑</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="knowledge"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>文档管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="doc-upload">上传</Menu.Item>
                  <Menu.Item key="doc-edit">编辑</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="homePage"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>首页管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="10">轮播图</Menu.Item>
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