import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord
} from "bizcharts";
import DataSet from "@antv/data-set";

// const data = [
//   {
//     user: "junxio",
//     finished: 100
//   },
//   {
//     user: "xixio~",
//     finished: 20
//   }
// ];

class Rank extends Component {
  render() {
    const data = this.props.data ? this.props.data : [];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: "sort",

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.finished - b.finished > 0;
      }
    });
    return (
      <div className="rank-wrapper">
        <h2 className="title">排行榜（前十名）</h2>
        <div>
          <Chart height={400} data={dv} forceFit>
            <Coord transpose />
            <Axis
              name="user"
              label={{
                offset: 12
              }}
            />
            <Axis name="finished" />
            <Tooltip />
            <Geom type="interval" position="user*finished" />
          </Chart>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  data: state.getIn(["user", "dataCenter", "rank"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Rank);