let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
};