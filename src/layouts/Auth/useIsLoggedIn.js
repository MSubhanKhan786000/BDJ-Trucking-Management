import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useIsLoggedIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    } else {
      navigate("/admin/dashboard");
    }
  }, [navigate]);
};
