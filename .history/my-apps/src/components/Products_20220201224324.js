// import data from "../data";
// import axios from "axios";

const Products = {
    async render() {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts")
            .then((response) => response.json())
            .then((data) => /* html */`
                <div class="grid grid-cols-3 gap-8">
                     ${data.map((post) => /* html */`
                            <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />                    
                            </a>
                            <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p class="text-sm text-gray-500">${post.desc} </p>
                        </div>
                    `).join("")}
                </div>
        `);
    },
};
export default Products;