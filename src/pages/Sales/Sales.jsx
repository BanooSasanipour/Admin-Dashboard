import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ReceiptIcon from '@mui/icons-material/Receipt';

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Sales.css";

export default function Sales() {
  const [salesDatas, setSalesDatas] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "salesDatas"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        const monthOrder = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const sorted = data.sort(
          (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
        );

        setSalesDatas(sorted);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="sales">
      <h2 className="salesTitle"><ReceiptIcon style={{marginRight: "10px"}} />Sales Overview</h2>

      {/* Sales Table */}
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
          {salesDatas.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.month}</td>
              <td>{item.product}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sales Chart */}
      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesDatas} barSize={23} barCategoryGap="25%">
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