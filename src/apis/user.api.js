import instance from "../helper/api.helper";

export const userAPI = {
    login,
};

function login(data) {
    return instance.post("/user/login", data);
}
