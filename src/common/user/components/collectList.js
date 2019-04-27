import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import Problem from "../components/collect/problem";
import Article from '../components/collect/article';
const TabPane = Tabs.TabPane;

class CollectList extends Component {
  render() {
    return (
      <div className="collect-list-wrapper">
        <Tabs defaultActiveKey="1" tabPosition="bottom">
          <TabPane tab="文章" key="1">
            <Article />
          </TabPane>
          <TabPane tab="题目" key="2">
            <Problem />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(CollectList);
