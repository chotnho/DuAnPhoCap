import instance from "../helper/api.helper";

export const googleAPI = {
    getThongKe6Den10,
    getThongKeDashboard,
    getpaging,
    getThongKeByTuoi,
    getThongKeXMC,
    getSoLieuCongTacChongMuChu,
    getSoNguoiMuChuTrongCacDoTuoi,
    getThongKeMuChuTrongCacDoTuoi,
    createDataDoiTuong,
    getPagingDoiTuong,
    deleteDoiTuong,
    updateDoiTuong,
    createFileExcelDoiTuong,
    getThongKeMuChuMuc1,
    getThongKeMuChuMuc2,
    getThongKeByThonAp
};

function getThongKe6Den10(options = {}) {
    return instance.get("/google/get-all-data-pho-cap");
}

function getThongKeDashboard(options = {}) {
    return instance.get("/google/get-thong-ke-dashboard");
}

function getpaging(query,options = {}) {
    return instance.get(`/google/get-paging-tra-cuu?pageIndex=${query.pageIndex}&pageSize=${query.pageSize}&soPhieu=${query.soPhieu}&hoVaTen=${query.hoVaTen}&ChuHo=${query.ChuHo}&GioiTinh=${query.GioiTinh}&YearFrom=${query.YearFrom}&YearTo=${query.YearTo}`);
}

function getThongKeByTuoi(query,options = {}) {
    return instance.get(`/google/get-thong-ke-by-tuoi?lop=${query.age}`);
}

function getThongKeXMC(options = {}) {
    return instance.get(`/google/get-thong-ke-xmc`);
}

function getSoLieuCongTacChongMuChu(options = {}) {
    return instance.get(`/google/get-so-lieu-cong-tac-chong-mu-chu`);
}

function getSoNguoiMuChuTrongCacDoTuoi(options = {}) {
    return instance.get(`/google/get-tong-hop-ket-qua-xoa-mu-chu`);
}

function getThongKeMuChuTrongCacDoTuoi(options = {}) {
    return instance.get(`/google/get-thong-ke-mu-chu-trong-cac-do-tuoi`);
}

function createDataDoiTuong(data) {
    return instance.post(`/google/create-doi-tuong`, data);
}

function getPagingDoiTuong(query) {
    return instance.get(`/google/get-paging-doi-tuong?pageIndex=${query.pageIndex}&pageSize=${query.pageSize}&search=${query.search}`);
}

function deleteDoiTuong(id) {
    return instance.delete(`/google/delete-doi-tuong/${id}`);
}

function updateDoiTuong(id, data) {
    return instance.put(`/google/update-doi-tuong/${id}`, data);
}

function createFileExcelDoiTuong( data) {
    return instance.post(`/google/create-file-excel`, data);
}

function getThongKeMuChuMuc1( ) {
    return instance.get(`/google/thong-ke-mu-chu-muc-do-1`);
}

function getThongKeMuChuMuc2( ) {
    return instance.get(`/google/thong-ke-mu-chu-muc-do-2`);
}

function getThongKeByThonAp(query ) {
    return instance.get(`/google/get-thong-ke-by-thon-ap?id=${query.id}`);
}