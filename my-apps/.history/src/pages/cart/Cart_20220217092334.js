import toastr from "toastr";
import { reRender } from "../../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
        ${Nav.render()}
        <div class= "max-w-7xl mx-auto">
            <body class="bg-gray-100">
            <div class="container mx-auto mt-10">
                <div class="flex shadow-md my-10">
                <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50 ">Giỏ Hàng Của Bạn</h1>
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>
                <tbody>
                    ${cart.map((item) => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.price_new}</td>
                            <td>
                                <input type="number" value="${item.quantity}" class="border border-gray-500 p-2"/>
                                <button data-id="${item.id}" class="btn btn-increase bg-green-500 p-2">Tăng</button>
                                <button data-id="${item.id}" class="btn btn-decrease bg-orange-500 p-2">Giảm</button>
                            </td>
                            <td>
                            <button data-id="${item.id}" data-id="${item.id}"n class="btn btn-remove bg-red-500 p-2">Xóa</button>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    },

    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        toastr.success("Xóa sản phẩm thành công");
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;