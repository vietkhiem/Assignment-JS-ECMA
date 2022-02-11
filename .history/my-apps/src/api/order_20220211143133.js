import instance from "./instance";

const OrderAPI = {
    getAll() {
        const url = `/orders`;
        return instance.get(url);
    },

    get(id) {
        const url = `/orders/${id}`;
        return instance.get(url);
    },

    add(data) {
        const url = `/orders`;
        return instance.post(url, data);
    },

    remove(id) {
        const url = `/orders/${id}`;
        return instance.delete(url);
    },

    update(id, data) {
        const url = `/orders/${id}`;
        return instance.put(url, data);
    },
};

export default OrderAPI;