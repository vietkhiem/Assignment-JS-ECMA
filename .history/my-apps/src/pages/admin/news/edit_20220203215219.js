import axios from "axios";
import { add, get, update } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";

const AdminEditPost = {
    async render() {
        const { data } = await get(id);
        return /* html */`
            <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news/add" class="sm:ml-3">
                    <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Cập nhật bài viết
                    </button>
                    </a>
    
                    <!-- Dropdown -->
                    <span class="ml-3 relative sm:hidden">
                    <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="mobile-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        More
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg
                        class="-mr-1 ml-2 h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </button>
                    <div
                        class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="mobile-menu-button"
                        tabindex="-1"
                    >
                        <!-- Active: "bg-gray-100", Not Active: "" -->
                        <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="mobile-menu-item-0"
                        >Edit</a
                        >
                        <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="mobile-menu-item-1"
                        >View</a
                        >
                    </div>
                    </span>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <form action="" id="form-edit">
            <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="mt-6 ">
                <div class="items-center -mx-2 md:flex">
                    <div class="w-full mx-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Tiêu đề bài viết</label></label>
        
                        <input id="title-post" value="${data.desc}" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text">
                    </div>
        
                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Image</label>
        
                        <input id="img-post" value="${data.image}" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email">
                    </div>
                </div>
        
                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Mô tả</label>
        
                    <textarea  id="desc-post" value="${data.desc}" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                </div>
        
                <div class="flex justify-center mt-6">
                    <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Thêm mới</button>
                </div>
            </div>
            </section>
            </form>
            <!-- /End replace -->
        </div>
            </main>
        </div>
            `;
    },
    afterRender(id) {
        const formEdit = document.querySelectorAll("#form-edit");
        // lấy từng button
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminEditPost;