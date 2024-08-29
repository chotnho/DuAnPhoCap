import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./hooks/useAuth";
import Layout from "./pages/Layout";
import StatisticM1 from "./pages/StatisticM1";
import Lookup from "./pages/Lookup";
import ThongKeXMC from "./pages/ThongKeXMC";
import LiteracyWork from "./pages/LiteracyWork";
import LiteracyResults from "./pages/LiteracyResults";
import SoNguoiMuChuTrongCacDoTuoi from "./pages/SoNguoiMuChuTrongCacDoTuoi";
import ThongKeMuChuMuc1 from "./pages/ThongKeMuChuMuc1";
import ThongKeMuChuMuc2 from "./pages/ThongKeMuChuMuc2";
import VillageManagement from "./pages/VillageManagement";
import SurveyManagement from "./pages/SurveyManagement";
import ThongKeThonXom from "./pages/ThongKeThonXom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/"  element={<Layout />} >
              <Route path="home" element={<Home />} />
              <Route path="thong-ke-m1" element={<StatisticM1 />} />
              <Route path="tra-cuu" element={<Lookup />} />
              <Route path="thong-ke-xmc" element={<ThongKeXMC />} />
              <Route path="tong-hop-cong-tac-chong-mu-chu" element={<LiteracyWork />} />
              <Route path="tong-hop-ket-qua-xoa-mu-chu" element={<LiteracyResults />} />
              <Route path="thong-ke-so-nguoi-mu-chu-trong-cac-do-tuoi" element={<SoNguoiMuChuTrongCacDoTuoi />} />
              <Route path="thong-ke-mu-chu-muc-do-1" element={<ThongKeMuChuMuc1 />} />
              <Route path="thong-ke-mu-chu-muc-do-2" element={<ThongKeMuChuMuc2 />} />
              <Route path="quan-ly-cai-dat" element={<VillageManagement />} />
              <Route path="quan-ly-phieu-dieu-tra" element={<SurveyManagement />} />
              <Route path="thong-ke-thon-xom" element={<ThongKeThonXom />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
