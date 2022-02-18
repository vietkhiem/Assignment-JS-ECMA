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
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
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