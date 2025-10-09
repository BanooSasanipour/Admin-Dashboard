import React, { useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./Reports.css"
import { chartDatas, reportColors, reportDatas } from "../../datas";



export default function Report() {

  const [ reportData, setReportData ] = useState(reportDatas);
  const [ chartData, setChartData ] = useState(chartDatas);
  const [ COLORS, setColors ] = useState( reportColors);
  const handleDownload = () => {
    alert("Report downloaded successfully!");
   
  };

  return (
    <div className="report">
      <h2>Project Status Report</h2>

      {/*  Table */}
      <table className="reportTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Status</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <span className={`status ${item.status.replace(" ", "").toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  Chart */}
      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/*  Download Button */}
      <div className="downloadBtnWrapper">
        <button onClick={handleDownload}>Download Report</button>
      </div>
    </div>
  );
}