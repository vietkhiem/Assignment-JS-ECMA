import data from "../data";

const Products = {
    render() {
        return /* html */`
        <div class = "max-w-5xl mx-auto">
            <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */`
                        <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.image}" alt="" />                    
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.name}</a></h3>
                        <p class="text-sm text-gray-500">${post.description} </p>
                    </div>
                `).join("")}
            </div>
            </div>
        `;
    },
};
export default Products;