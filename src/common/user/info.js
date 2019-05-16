import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Avatar, Icon, Divider, Tag, Badge } from "antd";
import ArticleList from "./components/articleList";
import CollectList from "./components/collectList";
import DataCenter from "./components/dataCenter";
import { actionCreators as userAction } from "./store";
import { querystringParse } from "../../utils";
import "./style.scss";

const tabListNoTitle = [
  {
    key: "article",
    tab: "文章"
  },
  {
    key: "collect",
    tab: "收藏夹"
  },
  {
    key: "dataCenter",
    tab: (
      <Badge dot>
        <span>数据中心</span>
      </Badge>
    )
  }
];

const contentListNoTitle = {
  article: <ArticleList />,
  collect: <CollectList />,
  dataCenter: <DataCenter />
};

class Info extends Component {
  state = {
    tabKey: "article",
    query: {}
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  InfoItem = (icon, text) => {
    return (
      <p className="info-item">
        <Icon type={icon} />
        {text}
      </p>
    );
  };

  initData = () => {
    const { user, getInfo } = this.props;
    const id = user.get("id");
    const query = querystringParse(window.location.search);
    getInfo(id);
    this.setState({
      tabKey: query.view ? query.view : "article",
      query
    });
  };

  render() {
    const { tabKey } = this.state;
    const { info } = this.props;
    return (
      <div className="user-info-wrapper">
        <div
          className={
            tabKey !== "dataCenter" ? "left-area" : "left-area data-center"
          }
        >
          <Card
            actions={[
              <Link to="/user/setup">
                <Icon type="setting" />
              </Link>,
              <Icon type="edit" />,
              <Icon type="ellipsis" />
            ]}
          >
            <div className="top">
              <div className="avatar">
                <Avatar src={info.get("avatar")} size={104} />
              </div>
              <h2 className="name">{info.get("nickname")}</h2>
              <span className="brief">{info.get("brief")}</span>
              <div className="sub">
                关注我 0
                <Divider type="vertical" />
                我关注 0
              </div>
            </div>
            {this.InfoItem("mail", info.get("email"))}
            {this.InfoItem("mobile", info.get("tel"))}
            {this.InfoItem("environment", "")}
            <a href="http://localhost:3001" target="blank">
              {this.InfoItem("paper-clip", "制作简历")}
            </a>
            <Divider dashed={true} />
            <div className="title">标签</div>
            <div>
              <Tag>很有想法的</Tag>
              <Tag>专注设计</Tag>
              <Tag>海纳百川</Tag>
            </div>
            <Divider dashed={true} />
            <div className="title">院校</div>
            <div className="school-item">
              <Avatar
                size={24}
                src="http://a0.att.hudong.com/03/29/50200014992522154401292368948_s.jpg"
              />
              <span className="school">东莞理工学院</span>
            </div>
          </Card>
        </div>
        <div
          className={
            tabKey !== "dataCenter" ? "right-area" : "right-area data-center"
          }
        >
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={tabKey}
            onTabChange={key => {
              this.onTabChange(key, "tabKey");
            }}
          >
            {contentListNoTitle[tabKey]}
          </Card>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initData();
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  info: state.getIn(["user", "info"])
});

const mapDispatch = dispatch => ({
  getInfo: id => dispatch(userAction.getInfo(id))
});

export default connect(
  mapState,
  mapDispatch
)(Info);
