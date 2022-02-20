import instance from "./instance";

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};