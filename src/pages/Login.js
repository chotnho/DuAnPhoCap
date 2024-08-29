import { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import "../styles/Login.css";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("pleae provide a valid input");
  };

  const handleChangeTaiKhoan = (e) => {
    setInput((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  }

  const handleChangePassword = (e) => {
    setInput((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  }

  return (
    <div id="login" >
      <div className="flex justify-center items-center h-[100vh] " >
        <form style={{ background: 'rgb(255 255 255 / 70%)' }} className="w-[350px] h-[auto]  p-4 rounded " onSubmit={handleSubmitEvent}>
          <div className="text-[#01579B] text-center text-1xl font-bold  " >HỆ THỐNG PHỔ CẬP XÓA MÙ CHỮ</div>
          <div className="text-[#E53935] text-center text-1xl font-bold  " >XÃ TAM THANH</div>
          <div className="mt-3" >
            <label className="" >Tài khoản:</label>
            <input onChange={handleChangeTaiKhoan} className="h-[40px] w-[100%] border-spacing-1 mt-2 p-2  box-border rounded" placeholder="Nhập tài khoản" type="text" />
          </div>
          <div className="mt-3">
            <label>Mật khẩu:</label>
            <input onChange={handleChangePassword} className="h-[40px] w-[100%] border-spacing-1 mt-2 p-2  box-border rounded" placeholder="Nhập mật khẩu" type="password" />
          </div>
          <div className="text-center mt-3" >
          <button className="bg-[#0288D1] text-white p-2 hover:bg-[#296486] rounded" >Đăng nhập</button>
          <div className="text-[#2e7d32] text-center text-[15px] pt-3" >Được phát triểu bởi Bùi Thanh Hải</div>
          </div>
        </form>
      </div>

    </div>

  );
};

export default Login;