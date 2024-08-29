import { Container } from "@mui/material";
import { Dropdown } from "antd";
import React, { Fragment } from "react";
import { CiLogin } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useAuth } from "../hooks/AuthProvider";
const items = [
  {
    key: "1",
    label: (
      <Link
       to="/tong-hop-cong-tac-chong-mu-chu"
       className="text-lg "
      >
        TH Công tác chống mù chữ
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
      to="/tong-hop-ket-qua-xoa-mu-chu"
      className="text-lg "
     >
      TH Kết quả xóa mù chữ
     </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
       to="/thong-ke-so-nguoi-mu-chu-trong-cac-do-tuoi"
       className="text-lg "
      >
        TK người MC trong các đội tuổi
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
       to="/thong-ke-mu-chu-muc-do-1"
       className="text-lg "
      >
        TK hiện trạng mù chữ 1
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link
       to="/thong-ke-mu-chu-muc-do-2"
       className="text-lg "
      >
        TK hiện trạng mù chữ 2
      </Link>
    ),
  },
];

const Layout = () => {
  const auth = useAuth();
  const handleLogoutClick = (e) => {
    e.preventDefault();
    auth.logOut()
  };

  return (
    <Fragment>
      <Container maxWidth="xl">
      <div className="flex justify-between bg-[#01579b] w-[100%] h-[60px]  items-center text-base font-bold text-[#f4f4f4] ">
       <div className="flex items-center " >
        <img alt="..." src={logo} className="w-[60px] h-[60px]" />
        <p className="m-3 ">HỆ THỐNG PHỔ CẬP XÓA MÙ CHỮ XÃ TAM THANH</p>
       </div>
        <div className="w-[30px]  bg-[#f44336] mr-1">
              <CiLogin
                className="cursor-pointer "
                size={30}
                onClick={handleLogoutClick}
              />
            </div>
      </div>
        <nav
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="bg-[FFFAFA] w-[100%] h-[50px] flex items-center " p
        >
          <ul className="flex items-center justify-center w-[100%] h-[60px] text-base font-bold text-[#14b8a6]">
                      <li className="w-[15%] text-center">
              <Link to="/home">Trang chủ</Link>
            </li>
            <li className="w-[15%] text-center">
              <Link to="/thong-ke-m1">Thống kê M1</Link>
            </li>
            <li className="w-[15%] text-center">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
              >
                <Link to="/thong-ke-xmc">Thống kê XMC</Link>
              </Dropdown>
            </li>
            <li className="w-[15%] text-center">
              <Link to="/thong-ke-thon-xom">Thôn xóm</Link>
            </li>
            <li className="w-[15%] text-center">
              <Link to="/quan-ly-phieu-dieu-tra">Phiếu điều tra</Link>
            </li>
            <li className="w-[15%] text-center">
              <Link to="/tra-cuu">Tra cứu</Link>
            </li>
            <li className="w-[15%] text-center">
              <Link to="/quan-ly-cai-dat">Cài đặt</Link>
            </li>
            
          </ul>
        </nav>

        <main className="p-3">
          <Outlet />
        </main>
      </Container>
    </Fragment>
  );
};

export default Layout;
