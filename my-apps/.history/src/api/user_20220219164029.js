import instance from "./instance";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const add = (product) => {
    const url = `/users`;
    return instance.post(url, product);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/users/${post.id}`;
    return instance.put(url, post);
};