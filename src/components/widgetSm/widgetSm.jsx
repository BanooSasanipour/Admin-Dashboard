// import React from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { newMembers } from "./../../datas";
// import "./widgetSm.css";

// export default function WidgetSm() {
//   return (
//     <div className="widgetSm">
//       <span className="widgetSmTitle">New Join Members</span>
//       <ul className="widgetSmList">
//         {newMembers.map((user) => (
//           <li key={user.id} className="widgetSmListItem">
//             <img src={user.img} className="widgetSmImg" />
//             <div className="widgetSmUser">
//               <span className="widgetSmUserName">{user.username}</span>
//               <span className="widgetSmUserTitle">{user.title}</span>
//             </div>
//             <button className="widgetSmButton">
//               <VisibilityIcon className="widgetSmIcon" />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./widgetSm.css";

export default function WidgetSm() {
  const [newMembers, setNewMembers] = useState([]);

  useEffect(() => {
    const fetchNewMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "newMembers"));
        const members = [];
        querySnapshot.forEach((doc) => {
          members.push({ id: doc.id, ...doc.data() });
        });
        setNewMembers(members);
      } catch (error) {
        console.error("Error fetching new members:", error);
      }
    };

    fetchNewMembers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} alt={user.username} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
