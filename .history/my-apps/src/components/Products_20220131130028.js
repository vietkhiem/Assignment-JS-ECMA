import data from "../data";

const Products = {
    render() {
        return /* html */ `

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

    <!-- End Products -->
      `;
    },
};
export default Products;