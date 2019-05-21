import React, { Component } from 'react';
import { Table, Tag, message, Button } from 'antd';
import moment from "moment";
import api from '../../../api';

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '作者',
    dataIndex: 'user_info',
    key: 'user_info',
    render: (data) => {
      return data.nickname;
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
    key: 'createAt',
    render: (text, record) => moment(text).format("YYYY-MM-DD HH:mm")
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      if (text === 1) {
        return <Tag color="#87d068">正常</Tag>
      } else {
        return <Tag color="red">注销</Tag>
      }
    }
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action'
  }
];

class ArticleList extends Component {
  state = {
    data: []
  };

  render() {
    const { data } = this.state;
    return (
      <div className="article-edit-panel">
        <Table
          columns={columns}
          dataSource={data}
          rowKey={record => record.id}
        />
      </div>
    )
  }

  initColumns = () => {
    const item = columns.find(item => item.key === "action");
    item.render = (text, record) => {
      const status = record.status;
      const id = record.id;
      return (
        <div className="btn-action-area">
          <Button type="danger" size="small" onClick={() => {
            if (status === 1) {
              api.updateArticle(id, { status: 0 }).then(res => {
                this.initData();
              });
            } else {
              api.updateArticle(id, { status: 1 }).then(res => {
                this.initData();
              });
            }
          }}>{status === 1 ? "下线" : "上线"}</Button>
        </div>
      )
    }
  }

  initData = () => {
    api.getArticles().then(res => {
      const data = res.data;
      if (data.result) {
        this.setState({
          data: data.data
        });
      } else {
        message.error(data.msg);
      }
    });
  };

  componentDidMount() {
    this.initData();
    this.initColumns();
  }
}

export default ArticleList;