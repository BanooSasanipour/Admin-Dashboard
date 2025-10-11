import React, { useEffect, useState } from "react";
import OutboxIcon from "@mui/icons-material/Outbox";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Mail.css";

export default function Mail() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [inbox, setInbox] = useState([]);
  const [sent, setSent] = useState([]);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inboxData"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setInbox(data);
      } catch (error) {
        console.error("Error fetching inbox:", error);
      }
    };

    const fetchSent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sentData"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setSent(data);
      } catch (error) {
        console.error("Error fetching sent:", error);
      }
    };

    fetchInbox();
    fetchSent();
  }, []);

  const renderMailItem = (mail, type) => (
    <li key={mail.id} className="mailItem">
      <MailOutlineIcon className="mailIcon" />
      <div className="mailContent">
        <strong className="mailSubject">{mail.subject}</strong>
        <span className="mailMeta">
          {type === "inbox" ? `From: ${mail.from}` : `To: ${mail.to}`}
        </span>
        <span className="mailDate">{mail.date}</span>
      </div>
    </li>
  );

  return (
    <div className="mail">
      <div className="mailTabs">
        <button
          className={activeTab === "inbox" ? "active" : ""}
          onClick={() => setActiveTab("inbox")}
        >
          <MoveToInboxIcon /> Inbox
        </button>
        <button
          className={activeTab === "sent" ? "active" : ""}
          onClick={() => setActiveTab("sent")}
        >
          <OutboxIcon /> Sent
        </button>
      </div>

      <ul className="mailList">
        {activeTab === "inbox"
          ? inbox.map((mail) => renderMailItem(mail, "inbox"))
          : sent.map((mail) => renderMailItem(mail, "sent"))}
      </ul>
    </div>
  );
}