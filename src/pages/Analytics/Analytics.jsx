import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AssessmentIcon from '@mui/icons-material/Assessment';

import "./Analytics.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Analytics() {
  const [userDatas, setUserDatas] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState("All");

  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userStats"));
        const stats = [];
        querySnapshot.forEach((doc) => {
          stats.push({ id: doc.id, ...doc.data() });
        });

        // Mounth Sorting
        const sortedStats = stats.sort(
          (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
        );

        // Persent Change
        const withChange = sortedStats.map((item, index, arr) => {
          if (index === 0) return { ...item, change: null };
          const prev = arr[index - 1].users;
          const change = ((item.users - prev) / prev) * 100;
          return { ...item, change: Math.round(change) };
        });

        setUserDatas(withChange);
      } catch (error) {
        console.error("Error fetching userStats:", error);
      }
    };

    fetchUserStats();
  }, []);

  // Filtering
  const filteredData =
    filteredMonth === "All"
      ? userDatas
      : userDatas.filter((item) => item.month === filteredMonth);

  return (
    <div className="analytics">
      <h2 className="analyticTitle"><AssessmentIcon style={{marginRight: "10px", width: "35px", height: "35px"}} />User Growth Analytics</h2>

      {/* Mounth Filtering */}
      <div className="monthFilter">
        <label>Filter by month: </label>
        <select
          className="monthSelect"
          value={filteredMonth}
          onChange={(event) => setFilteredMonth(event.target.value)}
        >
          <option value="All">All</option>
          {monthOrder.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value, name, props) => {
                if (name === "users") {
                  const change = props.payload.change;
                  return [
                    `${value} users`,
                    change !== null ? `Change: ${change}%` : "Initial month",
                  ];
                }
                return value;
              }}
            />
            <Line type="monotone" dataKey="users" stroke="#1976d2" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <table className="analyticsTable">
        <thead>
          <tr>
            <th>Month</th>
            <th>Users</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id || index}>
              <td>{item.month}</td>
              <td>{item.users}</td>
              <td>{item.change !== null ? `${item.change}%` : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Export PDF */}
      <div className="downloadBtnWrapper">
        <p>You can download the PDF report above 👆</p>
      </div>
    </div>
  );
}