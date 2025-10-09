import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  transactions,
  newMembers,
  userStats,
  feedbacksData,
  xAxisData,
  inboxData,
  sentData,
  manageItems,
  initialMessages,
  productsData,
  products,
  chartDatas,
  reportColors,
  reportDatas,
  salesDatas,
  initialDatas,
  userRows,
} from "./datas";

const collections = [
  { name: "transactions", data: transactions },
  { name: "newMembers", data: newMembers },
  { name: "userStats", data: userStats },
  { name: "feedbacksData", data: feedbacksData },
  { name: "xAxisData", data: xAxisData },
  { name: "inboxData", data: inboxData },
  { name: "sentData", data: sentData },
  { name: "manageItems", data: manageItems },
  { name: "initialMessages", data: initialMessages },
  { name: "productsData", data: productsData },
  { name: "products", data: products },
  { name: "chartDatas", data: chartDatas },
//   { name: "reportColors", data: reportColors },
  { name: "reportColors", data: reportColors.map(color => ({ color })) },
  { name: "reportDatas", data: reportDatas },
  { name: "salesDatas", data: salesDatas },
  { name: "initialDatas", data: initialDatas },
  { name: "userRows", data: userRows },
];

const seedAll = async () => {
  for (let col of collections) {
    const ref = collection(db, col.name);
    for (let item of col.data) {
      await addDoc(ref, item);
    }
    console.log(`✅ ${col.name} seeded`);
  }
};

seedAll();