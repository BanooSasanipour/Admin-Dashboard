import React, { useState } from "react";
import { useAsyncValue } from "react-router-dom";
import OutboxIcon from '@mui/icons-material/Outbox';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

import "./Mail.css";
import { inboxData } from "../../datas";
import { sentData } from "../../datas";


export default function Mail() {

  const [sent, setSent] = useState("sentData");
  const [activeTab, setActiveTab] = useState("inboxData");

  
  return (
    <div className="mail">
      <div className="mailTabs">
        <button
          className={activeTab === "inboxData" ? "active" : ""}
          onClick={() => setActiveTab("inboxData")}
        >
          <MoveToInboxIcon /> Inbox
        </button>
        <button
          className={activeTab === "sentData" ? "active" : ""}
          onClick={() => setActiveTab("sentData")}
        >
          <OutboxIcon /> Sent
        </button>
      </div>

      {activeTab === "inboxData" && (
        <ul className="mailList">
          {inboxData.map((mail) => (
            <li key={mail.id} className="mailItem">
              <strong>{mail.subject}</strong>
              <span className="mailFrom">From: {mail.from}</span>
            </li>
          ))}
        </ul>
      )}

      {activeTab === "sentData" && (
        <ul className="mailList">
          {sentData.map((mail) => (
            <li key={mail.id} className="mailItem">
              <strong>{mail.subject}</strong>
              <span className="mailFrom">To: {mail.to}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}