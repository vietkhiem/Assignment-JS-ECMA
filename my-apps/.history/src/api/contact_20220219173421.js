import instance from "./instance";

export const getAll = () => {
    const url = "/order";
    return instance.get(url);
};

export const contactAPI = {
    add(data) {
        const url = `/contacts`;
        return instance.post(url, data);
    },
    list() {
        const url = `/contacts`;
        return instance.get(url);
    },
    remove(id) {
        const url = `/contacts/${id}`;
        return instance.delete(url);
    },
    listCt(id) {
        const url = `/contacts/${id}`;
        return instance.get(url);
    },
    update(id, data) {
        const url = `/contacts/${id}`;
        return instance.put(url, data);
    },
};