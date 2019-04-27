import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import Assess from './assess';
import Analysis from './analysis';

const tabListNoTitle = [{
  key: 'assess',
  tab: '评估结果',
}, {
  key: 'analysis',
  tab: '答案解析',
}];

const contentListNoTitle = {
  assess: <Assess />,
  analysis: <Analysis />
};

class Result extends PureComponent {
  state = {
    key: 'assess',
    noTitleKey: 'assess'
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  }

  render() {
    const { noTitleKey } = this.state;
    return (
      <div className="result-wrapper">
        <div className="result-info-wrapper">
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={noTitleKey}
            onTabChange={key => {
              this.onTabChange(key, "noTitleKey");
            }}
          >
            {contentListNoTitle[noTitleKey]}
          </Card>
        </div>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Result);
