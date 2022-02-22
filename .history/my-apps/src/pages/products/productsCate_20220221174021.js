import {
    getAll, paginate, rangeProduct, Search, sortIdProduct, sortProduct,
} from "../../api/product";
import {
    $, $$, formatter, nextImage,
} from "../../utils";
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
                                    <p class="text-gray-500 dark:text-gray-300">New</p>
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
    async afterRender() {
        const limitProduct = Math.ceil((await getAll()).data.length / 9);
        for (let i = 1; i <= limitProduct; i++) {
            $("#pagination").innerHTML += /* html */ `
                ${i == 1 ? /* html */ `
                    <div class="mr-1">
                        <input type="radio" name="pagi" id="page${i}" value=${i} checked class="paginate hidden">
                        <label for="page${i}" class="pt">${i}</label>
                    </div>` : /* html */ `
                    <div class="mr-1">
                        <input type="radio" name="pagi" id="page${i}" value=${i} class="paginate hidden">
                        <label for="page${i}" class="pt">${i}</label>
                    </div>
                    `}
            `;
        }
        const filterproduct = $("#filter-product");
        filterproduct.addEventListener("change", async () => {
            if (filterproduct.value == "old") {
                const { data } = await sortIdProduct("asc");
                $("#product-cate").innerHTML = search.render(data);
                nextImage(data);
            } else if (filterproduct.value == "new") {
                const { data } = await sortIdProduct("desc");
                $("#product-cate").innerHTML = search.render(data);
                nextImage(data);
            } else if (filterproduct.value == "asc") {
                const { data } = await sortProduct("asc");
                $("#product-cate").innerHTML = search.render(data);
                nextImage(data);
            } else {
                const { data } = await sortProduct("desc");
                $("#product-cate").innerHTML = search.render(data);
                nextImage(data);
            }
        });
        const pages = $$(".paginate");
        pages.forEach((page) => {
            page.addEventListener("click", async () => {
                $("#product-cate").innerHTML = search.render(
                    (await paginate(page.value)).data,
                );
                document.documentElement.scrollTop = 0;
            });
        });
        const keyword = $("input[type=\"search\"]");
        keyword.addEventListener("keyup", async () => {
            const { data } = await Search(keyword.value);
            if (data.length == 0) {
                $("#product-cate").innerHTML =					"<span class=\"text-red-500\">Không tìm thấy sản phẩm</span>";
                $("#pagination").innerHTML = "";
            } else {
                $("#product-cate").innerHTML = search.render(data);
                $("#pagination").innerHTML = "";
            }
            nextImage(data);
        });
        Footer.afterRender();
    },
};
export default ProductsCate;