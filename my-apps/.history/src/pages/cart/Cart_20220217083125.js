import { reRender } from "../../utils";
import { increaseQuantity } from "../../utils/cart";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
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
                            <td>${item.price}</td>
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
                    console.log("decrease");
                } else {
                    console.log("remove");
                }
            });
        });
    },
};
export default CartPage;