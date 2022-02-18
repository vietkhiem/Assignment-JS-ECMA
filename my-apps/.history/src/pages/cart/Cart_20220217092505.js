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
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5"> <!-- product -->
                    <div class="w-20">
                        <img class="h-24" src="${item.image}" alt="">
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm">Iphone 6S</span>
                        <span class="text-red-500 text-xs">Apple</span>
                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                    </div>
                    <div class="flex justify-center w-1/5">
                    
        
                    <input class="mx-2 border text-center w-8" type="text" value="1">
        
                    
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
                    <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
                </div>
        
                
        
                <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
                
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                    Continue Shopping
                </a>
                </div>
        
                <div id="summary" class="w-1/4 px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items 3</span>
                    <span class="font-semibold text-sm">590$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                </div>
                <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                    </div>
                    <a href="/checkouts"><button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></a>
                </div>
                </div>
            </div>
            </div>

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