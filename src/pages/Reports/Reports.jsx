import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import SummarizeIcon from '@mui/icons-material/Summarize';

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Reports.css";

export default function Report() {
  const [reportData, setReportData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [COLORS, setColors] = useState([]);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const reportSnap = await getDocs(collection(db, "reportDatas"));
        const chartSnap = await getDocs(collection(db, "chartDatas"));
        const colorSnap = await getDocs(collection(db, "reportColors"));

        const reports = [];
        reportSnap.forEach((doc) => reports.push({ id: doc.id, ...doc.data() }));
        setReportData(reports);

        const charts = [];
        chartSnap.forEach((doc) => charts.push(doc.data()));
        setChartData(charts);

        const colors = [];
        colorSnap.forEach((doc) => colors.push(doc.data().color));
        setColors(colors);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, []);

  const handleDownload = () => {
    alert("Report downloaded successfully!");
  };

  return (
    <div className="report">
      <h2 className="reportTitle"><SummarizeIcon style={{marginRight: "10px"}}/>Project Status Report</h2>

      {/* Table */}
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
                <span
                  className={`status ${item.status.replace(" ", "").toLowerCase()}`}
                >
                  {item.status}
                </span>
              </td>
              <td>${item.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}
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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Download Button */}
      <div className="downloadBtnWrapper">
        <button onClick={handleDownload}>Download Report</button>
      </div>
    </div>
  );
}