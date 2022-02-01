// import data from "../data";
// import axios from "axios";

const Products = {
    async render() {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts")
            .then((response) => response.json())
            .then((data) => /* html */`
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                     ${data.map((post) => /* html */`
                            <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />                    
                            </a>
                            <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p class="text-sm text-gray-500">${post.desc} </p>
                        </div>
                </div>        
                    `).join("")}
                </div>
        `);
    },
};
export default Products;