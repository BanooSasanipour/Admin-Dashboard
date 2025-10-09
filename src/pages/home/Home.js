import React, { useEffect, useState } from "react";
import Features from "./../../components/features/Feature";
import Chart from "./../../components/Chart/Chart";
import WidgetSm from "./../../components/widgetSm/widgetSm";
import WidgetLg from "./../../components/WidgetLg/WidgetLg";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";

export default function Home() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "salesDatas"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        
        const monthOrder = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const sorted = data.sort(
          (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
        );

        setChartData(sorted);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={chartData} dataKey="amount" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}