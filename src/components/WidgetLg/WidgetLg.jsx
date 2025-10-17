import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./WidgetLg.css";

export default function WidgetLg() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const Button = ({ type }) => {
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const data = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();

          const formattedDate = docData.date?.toDate
            ? docData.date.toDate().toISOString().split("T")[0]
            : docData.date || "—";

          data.push({
            id: doc.id,
            customer: docData.customer || "—",
            img: docData.img || "https://via.placeholder.com/40",
            date: formattedDate,
            amount: docData.amount || 0,
            status: docData.status || "Pending",
          });
        });

        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest Transactions</h3>
      <table className="WidgetLgTable">
        <thead>
          <tr className="WidgetLgTr">
            <th className="WidgetLgTh">Customer</th>
            <th className="WidgetLgTh">Date</th>
            <th className="WidgetLgTh">Amount</th>
            <th className="WidgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id} className="WidgetLgTr">
              <td className="WidgetLgUser">
                {/* <img
                  src={transaction.img}
                  alt={transaction.customer}
                  className="WidgetLgImg"
                /> */}
                <img
                  src={`${process.env.PUBLIC_URL}/${transaction.img}`}
                  alt={transaction.customer}
                  className="widgetLgImg"
                />



                <span className="WidgetLgName">{transaction.customer}</span>
              </td>
              <td className="WidgetLgDate">{transaction.date}</td>
              <td className="WidgetLgAmount">${transaction.amount}</td>
              <td className="WidgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "activePage" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}