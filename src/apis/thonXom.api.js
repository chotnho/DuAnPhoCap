import instance from "../helper/api.helper";

export const thonXomAPI = {
    create,
    getAllThonAp,
    deleteThonAp,
    updateThonAp
};

function create(data) {
    return instance.post("/thon-ap/create", data);
}

function getAllThonAp() {
    return instance.get("/thon-ap/get-all", { timeout: 30000 });
}

function deleteThonAp(id) {
    return instance.delete(`/thon-ap/delete/${id}`);
}

function updateThonAp(id, data) {
    return instance.put(`/thon-ap/update/${id}`,data);
}