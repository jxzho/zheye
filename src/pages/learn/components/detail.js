import React, { Component } from 'react';
import { Select, Form, Input, message, Button } from 'antd';
import ReactMarkdown from "react-markdown";
import api from "../../../api";
import { Scrollbars } from "react-custom-scrollbars";
const Option = Select.Option;

class DocDetail extends Component {
  state = {
    id: -1,
    type: -1,
    title: "",
    content: ""
  }

  handleTypeChange = type => {
    this.setState({ type });
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleUpload = () => {
    const { type, title, content, id } = this.state;
    const data = {
      type,
      title,
      content
    };
    api.updateDoc(id, data).then(res => {
      const data = res.data;
      if (data.result) {
        message.success(`更新成功，共更新${data.data[0]}条数据！`);
      } else {
        message.error("更新失败！");
      }
    });
  };

  render() {
    const { content, title, type } = this.state;
    return (
      <div className="doc-detail-panel">
        <div className="doc-edit">
          <Form layout="vertical" onChange={this.handleFormChange}>
            <Form.Item label="文档名称">
              <Select 
                key={type}
                defaultValue={type} 
                style={{ width: 120 }} 
                onChange={this.handleTypeChange}
              >
                <Option value={1}>JavaScript</Option>
                <Option value={2}>CSS</Option>
                <Option value={3}>HTML</Option>
              </Select>
            </Form.Item>
            <Form.Item label="一级标题">
              <Input name="title" value={title} />
            </Form.Item>
            <Form.Item label="内容" className="doc-item-content">
              <Input.TextArea
                name="content"
                value={content}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleUpload} >更新</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="doc-edit-show">
          <Scrollbars>
            <h1>标题：{this.state.title}</h1>
            <h2>内容：</h2>
            <div className="doc-content">
              <div className="md-show-content">
                <ReactMarkdown source={content} />
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api.getDocDetail(id).then(res => {
      const data = res.data;
      if (data.result) {
        message.success("初始化成功");
        this.setState({
          id: id,
          content: data.data.content,
          title: data.data.title,
          type: data.data.documentId
        });
      } else {
        message.error("获取失败");
      }
    });
  }
}

export default DocDetail;