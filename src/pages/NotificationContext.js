import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotificationContext = createContext();

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([]);

  // ✅ Load notifications on start
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/notifications`);
      setNotifications(res.data);
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };

  // ✅ Add notification
  const addNotification = async (product) => {
    try {
      await axios.post(`${BASE_URL}/api/notifications`, product);
      fetchNotifications(); // refresh list
    } catch (err) {
      console.log("Add Error:", err);
    }
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllRead
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};


















// import { createContext, useState } from "react";

// export const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {

//   const [notifications, setNotifications] = useState([]);

//   // const addNotification = (product) => {


// const addNotification = async (product) => {
//   try {
//     await axios.post(`${BASE_URL}/api/notifications`, product);

//     const res = await axios.get(`${BASE_URL}/api/notifications`);
//     setNotifications(res.data); // ✅ only this
//   } catch (err) {
//     console.log(err);
//   }
// };


// //     const addNotification = async (product) => {
// //   await axios.post(`${BASE_URL}/api/notifications`, product);

// //   const res = await axios.get(`${BASE_URL}/api/notifications`);
// //   setNotifications(res.data);
// // // };
// //     const newNotification = {
// //       id: Date.now(),
// //       name: product.name,
// //       category: product.category,
// //       description: product.description,
// //       read: false
// //     };

//     setNotifications((prev) => [newNotification, ...prev]);
//   };

//   const markAllRead = () => {
//     setNotifications((prev) =>
//       prev.map((n) => ({ ...n, read: true }))
//     );
//   };



  

//   return (
//     <NotificationContext.Provider value={{
//       notifications,
//       addNotification,
//       markAllRead
//     }}>
//       {children}
//     </NotificationContext.Provider>
//   );
