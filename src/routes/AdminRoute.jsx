import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { role } = useAuth();
  // role load hone ka wait
  if (role !== "admin") {
    return <Navigate to="/login" />;
  }



  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}