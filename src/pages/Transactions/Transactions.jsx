import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';


import "./Transactions.css";

export default function Transaction() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "initialDatas"));
        const items = [];
        querySnapshot.forEach((docSnap) => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        setData(items);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const matchSearch = item.title?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || item.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "initialDatas", id));
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="transactionWrapper">
      <h2 className="transactionTitle"><PaidOutlinedIcon style={{ width : "35px", height: "35px", marginRight:"10px"}} />Transaction History</h2>

      <div className="transactionControls">
        <div className="searchControl">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <select
          className="selectControl"
          value={filterStatus}
          onChange={(event) => setFilterStatus(event.target.value)}
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
              <td>${item.total}</td>
              <td>
                <span className={`status ${item.status?.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td className="actionCell">
                <button className="menuBtn" onClick={() => handleMenuToggle(item.id)}>
                  ⋮
                </button>
                {openMenuId === item.id && (
                  <div className="dropdownMenu">
                    <button>View Detail</button>
                    <button>Edit</button>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
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