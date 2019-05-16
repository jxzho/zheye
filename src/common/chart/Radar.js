import {
  Chart,
  Tooltip,
  Axis,
  Legend,
  Coord,
  Line,
  Point,
  Area
} from "viser-react";
import * as React from "react";
import DataSet from "@antv/data-set";

const sourceData = [
  { item: "javascript", rate: 5 },
  { item: "css", rate: 0 },
  { item: "html", rate: 0 },
  { item: "react", rate: 0 },
  { item: "vue", rate: 0 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "fold",
  fields: ["rate"],
  key: "type",
  value: "score"
});
const data = dv.rows;

const scale = [
  {
    dataKey: "score",
    min: 0,
    max: 100
  }
];

class Radar extends React.Component {
  render() {
    const axis1Opts = {
      dataKey: "item",
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false
      }
    };

    const axis2Opts = {
      dataKey: "score",
      line: null,
      tickLine: null,
      label: null,
      grid: {
        type: "polygon",
        lineStyle: {
          lineDash: null
        }
      }
    };

    const coordOpts = {
      type: "polar",
      radius: "0.8"
    };

    return (
      <Chart
        forceFit
        height={300}
        data={data}
        padding={[20, 20, 95, 20]}
        scale={scale}
      >
        <Tooltip />
        <Axis {...axis1Opts} />
        <Axis {...axis2Opts} />
        <Legend dataKey="type" marker="circle" offset={30} />
        <Coord {...coordOpts} />
        <Line position="item*score" color="type" size={2} />
        <Point position="item*score" color="type" size={4} shape="circle" />
        <Area position="item*score" color="type" />
      </Chart>
    );
  }
}

export default Radar;
