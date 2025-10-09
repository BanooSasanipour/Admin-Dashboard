import React, { useState } from "react";
import "./Manage.css";
import { manageItems } from "../../datas";

export default function Manage() {
  const [items, setItems] = useState(manageItems);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit action triggered for item ID: ${id}`);
  };

  return (
    <div className="manage">
      <h2>Manage Users</h2>
      <table className="manageTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td className="manageBtn">
                <button onClick={() => handleEdit(item.id)} className="editBtn">Edit</button>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium userListDelete css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteOutlineIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path></svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}