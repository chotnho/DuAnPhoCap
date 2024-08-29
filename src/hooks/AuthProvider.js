import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../apis/user.api";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const res = await userAPI.login(data)
      
      if (res.data.status === 1) {
        toast.success('Đăng nhập thành công!')
        setUser(res.data.data.user);
        setToken(res.data.data.jwtToken);
        
        localStorage.setItem("token", res.data.data.jwtToken);
        localStorage.setItem("user", res.data.data);
        navigate("/home");
        return;
      } else {
        toast.error('Tài khoản hoặc mật khẩu của bạn không đúng!')
      }
    } catch (err) {
      toast.error('Tài khoản hoặc mật khẩu của bạn không đúng!')
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};