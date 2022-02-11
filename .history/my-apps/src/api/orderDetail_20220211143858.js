import instance from "./instance";

export const getAll = () => {
    const url = "/order_detail";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/order_detail/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/order_detail`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/order_detail/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/order_detail/${post.id}`;
    return instance.put(url, post);
};