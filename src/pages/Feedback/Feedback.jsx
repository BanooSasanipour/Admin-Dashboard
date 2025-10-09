import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import MessageIcon from '@mui/icons-material/Message';


import "./Feedback.css";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedbacksData"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        // Sort by date (newest first)
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFeedbacks(sorted);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (

    
    <div className="feedback">
      <h2 className="feedbackTitle"><MessageIcon className="feedbackIcon"/> User Feedback</h2>
      <table className="feedbackTable">
        <thead>
          <tr>
            <th className="feedbackRow">Name</th>
            {/* <th>Email</th> */}
            <th className="feedbackRow">Message</th>
            <th className="feedbackRow">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((item) => (
            <tr key={item.id}>
              <td className="feedbackRow">{item.user || "—"}</td>
              {/* <td>{item.email || "—"}</td> */}
              <td className="feedbackRow">{item.message || "—"}</td>
              <td className="feedbackRow">{item.date || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
