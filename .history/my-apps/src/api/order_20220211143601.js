import instance from "./instance";

export const getAll = () => {
    const url = "/order";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/order`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/order/${id}`;
    return instance.delete(url);
};
export const update = (id) => {
    const url = `/order/${id}`;
    return instance.put(url);
};