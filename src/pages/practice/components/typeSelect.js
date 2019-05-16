import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Radio, Divider } from 'antd';
import { actionCreators as practiceAction } from '../store';
import { issueTypes, gradeTypes } from '../config';

class TypeSelect extends PureComponent {
  typeChange = (e) => {
    const value = e.target.value;
    const { changeType } = this.props;
    changeType(value);
  }

  numChange = (e) => {
    const value = e.target.value;
    const { changeNum } = this.props;
    changeNum(value);
  }

  gradeChange = e => {
    const grade = e.target.value;
    this.props.changeGrade(grade);
  };

  render() {
    return (
      <div className="type-select-wrapper">
        <Radio.Group defaultValue="" buttonStyle="solid" onChange={this.typeChange}>
          {issueTypes.map(item => (
            <Radio.Button value={item} key={item}>{item}</Radio.Button>
          ))}
        </Radio.Group>
        <Divider dashed={true} />
        <Radio.Group defaultValue="" buttonStyle="solid" onChange={this.numChange}>
          <Radio.Button value="5">5道</Radio.Button>
          <Radio.Button value="10">10道</Radio.Button>
          <Radio.Button value="20">20道</Radio.Button>
        </Radio.Group>
        <Divider dashed={true} />
        <Radio.Group defaultValue="" buttonStyle="solid" onChange={this.gradeChange}>
          {gradeTypes.map(item => (
            <Radio.Button value={item} key={item}>{item}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  changeType: (type) => dispatch(practiceAction.changeType(type)),
  changeNum: (num) => dispatch(practiceAction.changeNum(num)),
  changeGrade: (grade) => dispatch(practiceAction.changeGrade(grade)),
});

export default connect(
  mapState,
  mapDispatch
)(TypeSelect);
