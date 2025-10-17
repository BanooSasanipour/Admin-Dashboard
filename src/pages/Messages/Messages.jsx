import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MessageIcon from '@mui/icons-material/Message';

import "./Messages.css";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "initialMessages"));
        const data = [];
        querySnapshot.forEach((docSnap) => {
          data.push({ id: docSnap.id, ...docSnap.data() });
        });
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === messages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(messages.map((msg) => msg.id));
    }
  };

  const toggleStar = async (id, current) => {
    try {
      await updateDoc(doc(db, "initialMessages", id), { starred: !current });
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, starred: !current } : msg
        )
      );
    } catch (error) {
      console.error("Error toggling star:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "initialMessages", id));
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleBulkDelete = async () => {
    try {
      await Promise.all(
        selectedIds.map((id) => deleteDoc(doc(db, "initialMessages", id)))
      );
      setMessages((prev) => prev.filter((msg) => !selectedIds.includes(msg.id)));
      setSelectedIds([]);
    } catch (error) {
      console.error("Error bulk deleting messages:", error);
    }
  };

  const handleMarkUnread = async () => {
    try {
      await Promise.all(
        selectedIds.map((id) =>
          updateDoc(doc(db, "initialMessages", id), { read: false })
        )
      );
      setMessages((prev) =>
        prev.map((msg) =>
          selectedIds.includes(msg.id) ? { ...msg, read: false } : msg
        )
      );
      setSelectedIds([]);
    } catch (error) {
      console.error("Error marking unread:", error);
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.sender?.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="messages">
      <div className="messagesHeader">
        <h2 className="messagesTitle"><MessageIcon style={{marginRight: "10px"}} />Inbox</h2>
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
          <button className="composeBTN">
            <CreateIcon /> <span className="composeBTNText">Compose</span>
          </button>
          <div className="actionBTNs">
            <button onClick={handleBulkDelete}>Delete</button>
            <button>Archive</button>
            <button onClick={handleMarkUnread}>Mark as Unread</button>
            <button onClick={selectAll}>
              {selectedIds.length === messages.length
                ? "Unselect All"
                : "Select All"}
            </button>
          </div>
        </div>
      </div>

      <ul className="messageList">
        {filteredMessages.map((msg) => {
          const initials = msg.sender
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

          return (
            <li
              key={msg.id}
              className={`messageItem ${msg.read ? "read" : "unread"}`}
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(msg.id)}
                onChange={() => toggleSelect(msg.id)}
                className="messageCheckbox"
              />

              <div className="avatar">
                {msg.avatar ? (
                  // <img src={msg.avatar} alt="avatar" />
                  <img src={`${process.env.PUBLIC_URL}/${msg.avatar}`} alt="avatar" />
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
                <button
                  onClick={() => toggleStar(msg.id, msg.starred)}
                  className="starBtn"
                >
                  <StarIcon style={{ color: msg.starred ? "gold" : "gray" }} />
                </button>
                <button className="Btn" onClick={() => handleDelete(msg.id)}>
                  <DeleteOutlineIcon style={{color : "red"}} />
                </button>
                <button className="Btn" onClick={() => handleMarkUnread(msg.id)}>
                  <MarkAsUnreadIcon style={{ color: "green" }} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}