// import data from "../data";
// import axios from "axios";
import { getAll } from "../api/post";

const Products = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Best - Selling product</h2>
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                     ${data.map((post) => /* html */`
                    <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <a href="">
                            <img src="${post.image}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </a>
                    </div>
                    <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                        <a href="/news/${post.id}">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <h2 class="text-2xl text-black ml-4 ">${post.name}</h2>
                            
                        </a>
                        </h3>
                        <div class="mt-4 text-center no-underline">
                            
                                <li class ="line-through px-4 py-2">Giá cũ ${post.price_old}$</li>
                                <li class ="px-4 py-2">Giá sale ${post.price_new}$</li>
                            
                        </div>
                    </div>
                    </div>
                </div>
                    `).join("")}
                </div>
        `;
    },
};
export default Products;