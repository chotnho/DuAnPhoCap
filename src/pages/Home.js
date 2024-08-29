import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import icons_name from "../assets/images/user_nam.png";
import icons_nu from "../assets/images/user_nu.png";
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [data, setData] = React.useState();

  const getThongKe6Den10s = async () => {
    try {
      const result = await googleAPI.getThongKeDashboard({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getThongKe6Den10s();
  }, []);
  
  return (
    <React.Fragment>
      {
        data ? (

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item >
                <Box className="bg-[#18C98E] p-3 pt-6 pb-6 w-[100%]">
                  <div className="text-center text-4xl text-white font-bold">
                    Tổng số dân
                  </div>
                  <div className="flex items-center text-center justify-center pt-11 mt-4">
                    <div className="text-6xl text-[#c62828] font-bold">
                    {data?.totalDan.total}
                    </div>
                    <div className="text-2xl text-[#f6f6f7] pt-5">người  </div>
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-7">
                    <div className="text-white text-3xl font-medium">
                      <img alt="..." src={icons_name} className="w-[80px]" />
                      <div className="mt-2">{data?.totalDan.nam}</div>
                    </div>
                    <div className="text-white text-3xl font-medium">
                      <img alt="..." src={icons_nu} className="w-[75px]" />
                      <div className="mt-2">{data?.totalDan.nu}</div>
                    </div>
                  </div>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Múc Thanh Phú
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuMucThanhPhu.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuMucThanhPhu.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuMucThanhPhu.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Giát - Vảo
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuDatVao.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuDatVao.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuDatVao.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Én
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuEn.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuEn.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuEn.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Vai
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuVai.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuVai.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuVai.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Chiêu
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuChieu.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuChieu.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuChieu.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Box className="bg-[#bbbebd] p-3 w-[100%]">
                      <div className="text-center text-base text-white font-bold">
                        Khu Tảng
                      </div>
                      <div className="flex items-center text-center justify-center  ">
                         <div className="text-5xl text-[#c62828] font-bold">{data?.khuTang.total}
                         </div> 
                         <div className="text-1xl text-[#29b6f6] pt-4 ml-1">người  </div>
                      </div>
                      <div className="flex items-center justify-center gap-6 ">
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_name} className="w-[40px]" />
                          <div >{data?.khuTang.nam}</div>
                        </div>
                        <div className="text-white text-base font-medium">
                          <img alt="..." src={icons_nu} className="w-[40px]" />
                          <div >{data?.khuTang.nu}</div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>) : (
          <LazyLoading />
        )}
    </React.Fragment>

  );
};

export default Home;
