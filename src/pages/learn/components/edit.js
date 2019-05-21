import React, { Component } from 'react';
import { Table, Tag, Select } from 'antd';
import moment from "moment";
import { Link } from "react-router-dom";
import api from '../../../api';
const Option = Select.Option;

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt',
    key: 'updateAt',
    render: (text, record) => moment(text).format("YYYY-MM-DD HH:mm")
  },
  {
    title: '详情',
    dataIndex: 'detail',
    key: 'detail',
    render: (text, record) => (
      <Link to={`/doc/detail/${record.id}`}>
        <Tag color="#87d068">详情</Tag>
      </Link>
    )
  }
];

const data = [
  {
    "id": 1,
    "documentId": 3,
    "title": "基础",
    "content": "#### HTMl基础\n>HTML 标题（Heading）是通过<h1> - <h6> 标签来定义的.\n\n```\n<h1>这是一个标题</h1>\n<h2>这是一个标题</h2>\n<h3>这是一个标题</h3>\n```\n---\n\n\n#### HTMl段落\n> HTML 段落是通过标签 <p> 来定义的.\n\n```\n<p>这是一个段落。</p>\n<p>这是另外一个段落。</p>\n```\n---\n\n\n\n#### HTMl链接\n> HTML 链接是通过标签 <a> 来定义的.\n\n```\n<a href=\"http://www.baidu.com\">这是一个链接</a>\n```\n---\n\n\n#### HTMl图像\n> HTML 图像是通过标签 <img> 来定义的.\n\n```\n<img src=\"/images/logo.png\"width=\"258\" height=\"39\"/>\n```\n**注意**：图像的名称和尺寸是以属性的形式提供的。\n",
    "createAt": 1558168575197,
    "updateAt": 1558168575197,
    "status": null
  },
  {
    "id": 2,
    "documentId": 3,
    "title": "介绍",
    "content": "#### HTMl基础\n>HTML 标题（Heading）是通过<h1> - <h6> 标签来定义的.\n\n```\n<h1>这是一个标题</h1>\n<h2>这是一个标题</h2>\n<h3>这是一个标题</h3>\n```\n---\n\n\n#### HTMl段落\n> HTML 段落是通过标签 <p> 来定义的.\n\n```\n<p>这是一个段落。</p>\n<p>这是另外一个段落。</p>\n```\n---\n\n\n\n#### HTMl链接\n> HTML 链接是通过标签 <a> 来定义的.\n\n```\n<a href=\"http://www.baidu.com\">这是一个链接</a>\n```\n---\n\n\n#### HTMl图像\n> HTML 图像是通过标签 <img> 来定义的.\n\n```\n<img src=\"/images/logo.png\"width=\"258\" height=\"39\"/>\n```\n**注意**：图像的名称和尺寸是以属性的形式提供的。\n",
    "createAt": 1558168575197,
    "updateAt": 1558168575197,
    "status": null
  }
];

class DocEdit extends Component {
  state = {
    type: 3,
    data: []
  };

  handleTypeChange = type => {
    this.setState({ type });
    api.getDocAll(type).then(res => {
      const data = res.data;
      if (data.result) {
        this.setState({ data: data.data });
      }
    });
  };

  render() {
    const { type, data } = this.state;
    return (
      <div className="doc-edit-panel">
        <div className="doc-type-select">
          <Select
            defaultValue={type}
            style={{ width: 120 }}
            onChange={this.handleTypeChange}
          >
            <Option value={1}>JavaScript</Option>
            <Option value={2}>CSS</Option>
            <Option value={3}>HTML</Option>
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={record => record.id}
        />
      </div>
    )
  }

  componentDidMount() {
    const { type } = this.state;
    api.getDocAll(type).then(res => {
      const data = res.data;
      if (data.result) {
        this.setState({ data: data.data });
      }
    });
  }
}

export default DocEdit;