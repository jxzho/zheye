import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Typography, Checkbox } from "antd";
import { issueTypes, problemTypes } from "./config";
import { actionCreators as problemAction } from "./store";
const Option = Select.Option;
const { Paragraph } = Typography;

class Upload extends PureComponent {
  state = {
    issue: "",
    ans: ["", "", "", ""],
    right: -1,
    type: issueTypes[0],
    problemType: problemTypes[0]
  };

  formChange = e => {
    const target = e.target;
    if (target.name === "issue") {
      this.setState({
        issue: target.value
      });
    }
  };

  typeChange = value => {
    this.setState({
      type: value
    });
  };

  problemTypeChange = problemType => {
    this.setState({ problemType });
  };

  ansChange = (index, text) => {
    const updateAns = [].concat(this.state.ans);
    updateAns[index] = text;
    this.setState({
      ans: updateAns
    });
  };

  selectRight = (index, checked) => {
    this.setState({
      right: index
    });
  };

  renderAns = () => {
    const { problemType, ans } = this.state;
    switch (problemType) {
      case "single":
        return null;
      case "multiple":
        return ans.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <Checkbox
              style={{ marginRight: "8px" }}
              onChange={e => {
                const checked = e.target.checked;
                this.selectRight(index, checked);
              }}
            />
            <Paragraph
              editable={{
                onChange: text => {
                  this.ansChange(index, text);
                }
              }}
            >
              {item ? item : "填写答案"}
            </Paragraph>
          </div>
        ));
      default:
        return null;
    }
  };

  infoSubmit = () => {
    const data = { ...this.state };
    data.ans = JSON.stringify(data.ans);
    this.props.uploadProblem(data);
    this.setState({
      issue: "",
      ans: ["", "", "", ""],
      right: -1
    });
  };

  render() {
    const { issue, type, problemType } = this.state;
    return (
      <div className="upload-wrapper">
        <Form layout="vertical" onChange={this.formChange}>
          <Form.Item label="题目">
            <Input value={issue} name="issue" />
          </Form.Item>
          <Form.Item label="题型">
            <Select
              defaultValue={problemType}
              style={{ width: 120 }}
              onChange={this.problemTypeChange}
            >
              {problemTypes.map(item => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="类型">
            <Select
              defaultValue={type}
              style={{ width: 120 }}
              onChange={this.typeChange}
            >
              {issueTypes.map(item => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="答案">{this.renderAns()}</Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.infoSubmit}>
              上传该题
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  uploadProblem: data => dispatch(problemAction.uploadProblems(data))
});

export default connect(
  mapState,
  mapDispatch
)(Upload);
