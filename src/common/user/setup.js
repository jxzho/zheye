import React, { Component, } from 'react';
import { Tabs } from 'antd';
import Base from './components/setBase';
const TabPane = Tabs.TabPane;

class SetUp extends Component {
  state = {
    curTab: '基本设置'
  };

  tabsChange = (tabs) => {
    this.setState({ curTab: tabs });
  };

  render() {
    const { curTab } = this.state;
    return (
      <div className="setup-wrapper">
        <Tabs
          defaultActiveKey={curTab}
          tabPosition="left"
          onChange={this.tabsChange}
        >
          <TabPane tab="基本设置" key="基本设置">
            <h2 className="title">{curTab}</h2>
            <Base />
          </TabPane>
          <TabPane tab="安全设置" key="安全设置">
            <h2 className="title">{curTab}</h2>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default SetUp;