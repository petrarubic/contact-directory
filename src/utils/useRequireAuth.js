import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const handleStorageChange = () => {
  const token = localStorage.getItem("X-token");
  if (!token) {
    window.location.reload();
  }
};

function useRequireAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("X-token");
    if (!token) {
      navigate("/login");
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);
}

export default useRequireAuth;
