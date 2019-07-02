import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import { connect } from "react-redux";
import api from "../../../api";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    dataSource: [],
    data: []
  };

  onSelect = (value) => {
    this.props.history.push(`/detail/${value}`);
  }

  handleSearch = value => {
    const {data} = this.state;
    const result = data.filter(item => {
      return item.title.indexOf(value) !== -1
    });
    this.setState({
      dataSource: result.map((item, index) => <span key={item.id}>{item.title}</span>)
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="搜索"
      >
         <Input suffix={<Icon type="search"/>} />
      </AutoComplete>
    );
  }

  componentDidMount() {
    api.getArticles().then(res => {
      const data = res.data;
      this.setState({
        data: data.data
      });
    });
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Search));
