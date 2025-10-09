import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import "./Transactions.css";
import { initialDatas } from "../../datas";

export default function Transaction() {

  const [ initialData, setInitialData ] = useState(initialDatas);
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [openMenuId, setOpenMenuId] = useState(null);

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      filterStatus === "All" || item.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="transactionWrapper">
      <h2>Transaction History</h2>

      <div className="transactionControls">
        <div className="searchControl">
          <SearchIcon />
          <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
        <select
          className="selectControl"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      <table className="transactionTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Bill For</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.issueDate}</td>
              <td>{item.dueDate}</td>
              <td>{item.total}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td className="actionCell">
                <button
                  className="menuBtn"
                  onClick={() => handleMenuToggle(item.id)}
                >
                  ⋮
                </button>
                {openMenuId === item.id && (
                  <div className="dropdownMenu">
                    <button>View Detail</button>
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}