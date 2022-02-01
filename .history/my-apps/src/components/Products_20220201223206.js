// import data from "../data";
// import axios from "axios";

const Products = {
    async render() {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts")
            .then((response) => response.json())
            .then((data) => /* html */`
                ${data.map((post) => /* html */`
                            
                            
            <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a href="#" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <a href="/news/${post.id}">
                    <img src="${post.img}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                </a>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                ${post.title}
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                ${post.desc}
                </p>
                </a>
                <!-- More products... -->
            </div>
            </div>
            </div>

                                `).join("")}
        `);
    },
};
export default Products;