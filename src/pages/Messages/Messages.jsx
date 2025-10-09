import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import CreateIcon from '@mui/icons-material/Create';


import "./Messages.css";
import { initialMessages } from "../../datas"



export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === messages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(messages.map((msg) => msg.id));
    }
  };

  const toggleStar = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };



  const handleBulkDelete = () => {
    setMessages(messages.filter((msg) => !selectedIds.includes(msg.id)));
    setSelectedIds([]);
  };

  const handleMarkUnread = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        selectedIds.includes(msg.id) ? { ...msg, read: false } : msg
      )
    );
    setSelectedIds([]);
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.sender.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="messages">
      <div className="messagesHeader">
        <h2>Inbox</h2>
        <div className="searchbox">
          <SearchIcon />
          <input
          className="messagesInput"
          type="text"
          placeholder="Search by sender or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        </div>
        
        <div className="actionButtons">
          <button className="composeBTN"> <CreateIcon /> <span className="composeBTNText">Compose</span></button>
          <div className="actionBTNs">
            <button onClick={handleBulkDelete}>Delete</button>
            <button>Archive</button>
            <button onClick={handleMarkUnread}>Mark as Unread</button>
            <button onClick={selectAll}>
            {selectedIds.length === messages.length ? "Unselect All" : "Select All"}
            </button>
          </div>
          
        </div>
      </div>

      <ul className="messageList">
        {filteredMessages.map((msg) => {
          const initials = msg.sender
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

          return (
            <li key={msg.id} className={`messageItem ${msg.read ? "read" : "unread"}`}>
              <input
                type="checkbox"
                checked={selectedIds.includes(msg.id)}
                onChange={() => toggleSelect(msg.id)}
                className="messageCheckbox"
              />

              <div className="avatar">
                {msg.avatar ? (
                  <img src={msg.avatar} alt="avatar" />
                ) : (
                  <span className="initials">{initials}</span>
                )}
              </div>

              <div className="messageContent">
                <div className="topRow">
                  <span className="sender">{msg.sender}</span>
                  <span className="date">{msg.date}</span>
                </div>
                <span className="subject">{msg.subject}</span>
                <p className="preview">{msg.content}</p>
              </div>

              <div className="messageActions">
                <button onClick={() => toggleStar(msg.id)} className="starBtn">
                  {msg.starred ? <StarIcon style={{ color: 'yellow' }} />
                  : <StarIcon style={{ color: 'gray' }} />}
                </button>
                <button className="Btn" onClick={() => handleDelete(msg.id)}>
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium userListDelete css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteOutlineIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </button>
                <button className="Btn" onClick={() => handleMarkUnread(msg.id)}><MarkAsUnreadIcon style={{ color: 'green' }} /></button>

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}