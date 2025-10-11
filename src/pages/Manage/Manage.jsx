import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


import "./Manage.css";

export default function Manage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "manageItems"));
        const data = [];
        querySnapshot.forEach((docSnap) => {
          data.push({ id: docSnap.id, ...docSnap.data() });
        });
        setItems(data);
      } catch (error) {
        console.error("Error fetching manage items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "manageItems", id));
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (id) => {
    alert(`Edit action triggered for item ID: ${id}`);
  };

  return (
    <div className="manage">
      <h2><ManageAccountsIcon className="manageIcon" />Manage Users</h2>
      <table className="manageTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th className="actionCol">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td className="manageBtn">
                <button onClick={() => handleEdit(item.id)} className="editBtn">
                  <EditIcon style={{color : "green"}} />
                </button>
                <button onClick={() => handleDelete(item.id)} className="deleteBtn">
                  <DeleteOutlineIcon style={{color : "red"}}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}