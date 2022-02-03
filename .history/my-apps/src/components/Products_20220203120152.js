// import data from "../data";
import axios from "axios";

const Products = {
    async render() {
        return fetch("https://61f7bb5539431d0017eaf9aa.mockapi.io/posts")
            .then((response) => response.json())
            .then((data) => /* html */`
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
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
                            ${post.name}
                        </a>
                        </h3>
                        <h2 class="mt-1 text-sm text-gray-500">${post.price_old}$</h3>
                    </div>
                    </div>
                </div>
                    `).join("")}
                </div>
        `);
    },
};
export default Products;