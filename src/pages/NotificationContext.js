import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([]);

  // const addNotification = (product) => {

    const addNotification = async (product) => {
  await axios.post(`${BASE_URL}/api/notifications`, product);

  const res = await axios.get(`${BASE_URL}/api/notifications`);
  setNotifications(res.data);
// };
    const newNotification = {
      id: Date.now(),
      name: product.name,
      category: product.category,
      description: product.description,
      read: false
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };



  

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      markAllRead
    }}>
      {children}
    </NotificationContext.Provider>
  );
};