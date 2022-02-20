import toastr from "toastr";
import { add } from "../../api/checkout";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "toastr/build/toastr.min.css";

const Checkouts = {
    render() {
        return /* html */ `
        ${Nav.render()}
        <div class="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
        <div class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
            <div class="flex w-full flex-col justify-start items-start">
                <div class="">
                    <p class="text-3xl lg:text-4xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                </div>
                <div class="mt-2">
                    <a href="/cart" class="text-base dark:text-gray-400 leading-4 underline hover:text-gray-800 text-gray-600">Back to my bag</a>
                </div>
                <div class="mt-12">
                    <p class="text-xl font-semibold dark:text-white leading-5 text-gray-800">Shipping Details</p>
                </div>
                
                        <div class="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                        <form action="" id="form-checkout">
                        <input id="fullname" class="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Full Name" />
                        <input id="email" class="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Email" />
                        <input id="phone" class="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Phone Number" />
                        <input id="address" class="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                        <div class="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                            

                        </form>
                        </div>
                    
                    </div>
                    <button class="focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                
                
            </div>
            
            <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                <div>
                    <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">Order Summary</h1>
                </div>
                <div class="flex mt-7 flex-col items-end w-full space-y-6">
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total items</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">20</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total Charges</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$2790</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Shipping charges</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$90</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Sub total</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$3520</p>
                    </div>
                </div>
                <div class="flex justify-between w-full items-center mt-32">
                    <p class="text-xl dark:text-white font-semibold leading-4 text-gray-800">Estimated Total</p>
                    <p class="text-lg dark:text-white font-semibold leading-4 text-gray-800">$2900</p>
                </div>
            </div>
        </div>
    </div>
  
    ${Footer.render()}
        `;
    },
    afterRender() {
        const formCheckout = document.querySelector("#form-checkout");

        // submit form
        formCheckout.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của file upload cho sử dụng formData

            add({
                name: document.querySelector("#fullname").value,
                email: document.querySelector("#email").value,
                address: document.querySelector("#address").value,
                phone: document.querySelector("#phone").value,

            });
            toastr.success("Thêm sản phẩm thành công");
        });
    },
};
export default Checkouts;