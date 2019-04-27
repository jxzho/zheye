import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { PracticeWrapper } from "./style";
import { Layout } from "antd";
import Problem from "./components/problem";
import { actionCreators as practiceAction } from './store';
const { Content } = Layout;

class Do extends PureComponent {
  render() {
    return (
      <div className="practice-wrapper">
        <PracticeWrapper>
          <Layout>
            <Content>
              <Problem />
            </Content>
          </Layout>
        </PracticeWrapper>
      </div>
    );
  }

  componentDidMount() {
    const { type, num, user, getProblems } = this.props;
    getProblems(type, {
      total: num,
      userId: user.get('id')
    });
  }
}

const mapState = state => ({
  type: state.getIn(['practice', 'type']),
  num: state.getIn(['practice', 'num']),
  user: state.getIn(['user', 'user'])
});

const mapDispatch = dispatch => ({
  getProblems: (type, data) => dispatch(practiceAction.getProblems(type, data))
});

export default connect(
  mapState,
  mapDispatch
)(Do);
