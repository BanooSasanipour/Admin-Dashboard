import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./Sales.css";
import { salesDatas } from "../../datas";

export default function Sales() {

  const [ salesData, setSalesData ] = useState(salesDatas);
  return (
    <div className="sales">
      <h2>Sales Overview</h2>

      {/*  Sales Table */}
      <table className="salesTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Month</th>
            <th>Product</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.month}</td>
              <td>{item.product}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  Sales Chart */}
      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData} barSize={23} barCategoryGap="25%">
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#42a5f5" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#1976d2" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="url(#colorSales)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

