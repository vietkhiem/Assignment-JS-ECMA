import { getAll } from "../../api/product";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Partners from "../../components/Partners";

const ProductsCate = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-7xl mx-auto">
                ${Nav.render()}
                <section class="bg-white dark:bg-gray-900">
                    <div class="container px-6 py-8 mx-auto">
                        <div class="lg:flex lg:-mx-2">
                            <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</a>
                                <a href="#" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts & Vests</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a>
                            </div>

                            <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                                <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <div class="py-4">
                                <li class="ml-[38px] flex relative">
                                    <input type="search" id="name-category" class="outline-none focus:ring-indigo-500 focus:border-indigo-500 border-b-2 transition-all duration-300 ease-linear p-[5px] flex-1 block w-full sm:text-sm" placeholder="Enter new category...">
                                    <button type="submit"><i class="absolute right-0 top-[6px] cursor-pointer fas fa-search text-black font-semibold pr-[15px] text-[20px] hover:text-[#588067] transition-all"></i></button>
                                </li>
                            </div>
                                    <div class="flex items-center">
                                        <p class="text-gray-500 dark:text-gray-300">Sort</p>
                                        <select id="filter-product" class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                            <option value="#">Recommended</option>
                                            <option value="#">Price</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                ${data.map((product) => /* html */`
                                    <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <a href="/#/products-detail/${product.id}"><img class="object-cover w-full rounded-md h-72 xl:h-80" src="${product.image}" alt="T-Shirt"></a>
                                        <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">${product.name}</h4>
                                        <p class="text-blue-500">${product.price_new}$</p>
                                    </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            ${Partners.render()}
            ${Footer.render()}
        `;
    },

};
export default ProductsCate;