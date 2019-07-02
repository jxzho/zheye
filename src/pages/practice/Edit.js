import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Typography, Radio, Checkbox, message } from "antd";
import { issueTypes, problemTypes, gradeTypes } from "./config";
import { actionCreators as problemAction } from "./store";
import api from "../../api";

const Option = Select.Option;
const RadioGroup = Radio.Group;
const { Paragraph } = Typography;

class Edit extends PureComponent {
  state = {
    issue: "",
    ans: ["", "", "", ""],
    right: -1,
    multiRight: [],
    judgeRight: false,
    contentType: issueTypes[0],
    problemType: Object.keys(problemTypes)[0],
    curRadio: -1,
    grade: "简单",
    solution: ""
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
      contentType: value
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

  selectRight = (index) => {
    this.setState({
      right: index
    });
  };

  radioOnChange = e => {
    const index = this.state.ans.indexOf(e.target.value);
    this.setState({ curRadio: index });
    this.selectRight(index);
  }

  multiOnChange = (index, e) => {
    const checked = e.target.checked;
    const { multiRight } = this.state;
    const newMultiRight = [...multiRight];
    newMultiRight.push(index);
    if (checked) {
      this.setState({
        multiRight: newMultiRight
      });
    }
  }

  judgeOnChange = e => {
    this.setState({
      judgeRight: e.target.checked
    });
  }

  gradeTypeChange = value => {
    this.setState({
      grade: value
    });
  }

  renderAns = () => {
    const { problemType, ans, right } = this.state;
    switch (problemType) {
      case "单选":
        return (
          <RadioGroup
            style={{ display: 'flex', flexDirection: 'column' }}
            onChange={this.radioOnChange}
            value={ans[this.state.curRadio]}
          >
            {ans.map((item, index) => {
              console.log(item);
              return (
                <Radio key={"radio" + index} value={item}>
                  <Input onChange={e => {
                    this.ansChange(index, e.target.value);
                  }} value={item} />
                </Radio>
              )
            })}
          </RadioGroup>
        );
      case "多选":
        return ans.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <Checkbox
              style={{ marginRight: "8px" }}
              onChange={this.multiOnChange.bind(null, index)}
              checked={right.indexOf(index) !== -1}
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
      case "判断":
        return (
          <div style={{ display: "flex" }}>
            <Checkbox
              style={{ marginRight: "8px" }}
              onChange={this.judgeOnChange}
              checked={right}
            />
            <Input
              onChange={e => {
                this.setState({ ans: e.target.value })
              }}
              value={ans}
            />
          </div>
        );
      default:
        return '请选择一个题型';
    }
  };

  infoSubmit = () => {
    const { id } = this.props.match.params;
    const data = { ...this.state };
    data.ans = JSON.stringify(data.ans);
    data.multiRight = JSON.stringify(data.multiRight);
    api.updateProblem(id, data).then(res => {
      if (res.data.result) {
        message.success("更新成功");
      } else {
        message.error("更新失败");
      }
    });
  };

  render() {
    const { issue, contentType, problemType, grade } = this.state;
    return (
      <div className="problem-edit-wrapper">
        <Form layout="vertical" onChange={this.formChange}>
          <Form.Item label="题目">
            <Input value={issue} name="issue" />
          </Form.Item>
          <Form.Item label="题型">
            <Select
              value={problemType}
              style={{ width: 120 }}
              onChange={this.problemTypeChange}
            >
              {Object.keys(problemTypes).map(item => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="难度">
            <Select
              defaultValue={grade}
              style={{ width: 120 }}
              onChange={this.gradeTypeChange}
            >
              {gradeTypes.map(item => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="类型">
            <Select
              value={contentType}
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
          <Form.Item label="解析">
            <Input.TextArea 
              onChange={e => { this.setState({ solution: e.target.value }) }}
              value={this.state.solution}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.infoSubmit}>
              更新该题
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api.findProblem(id).then(res => {
      const data = res.data;
      if (data.result) {
        const item = data.data;
        console.log(item);
        this.setState({
          ans: JSON.parse(item.ans),
          issue: item.issue,
          right: item.right,
          problemType: item.problemType,
          contentType: item.contentType,
          grade: item.grade,
          solution: item.solution,
          curRadio: item.right
        });
      } else {

      }
    });
  }
}

const mapState = state => ({
});

const mapDispatch = dispatch => ({
  uploadProblem: data => dispatch(problemAction.uploadProblems(data))
});

export default connect(
  mapState,
  mapDispatch
)(Edit);