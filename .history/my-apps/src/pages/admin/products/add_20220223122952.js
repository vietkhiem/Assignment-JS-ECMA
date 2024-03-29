// import axios from "axios";
import axios from "axios";
import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";
import { reRender } from "../../../utils";
import AdminNav from "../../../components/AdminNav";
import { add } from "../../../api/product";
import "toastr/build/toastr.min.css";

const AdminAddProductssPage = {
    render() {
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Add New Product
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/products" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Back
                    </button>
                    </a>
                </div>
                </div>
        
            </div>
            </header>
        <main>

            <section class="max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-5 ">                    
                    <form action="" id="form-add">
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product name</label>
                                <input id="title-post" placeholder="Title" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text">
                            </div>

                            <div>
                            
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="emailAddress">Product image</label>
                                <input type="file" 
                                id="image-post" 
                                placeholder="Image" 
                                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >            </div>


                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Prices of unsold products</label>
                                <input id="price-post-old" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                                </div>

                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Prices have dropped</label>
                                <input id="price-post-new" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                            </div>
                            
                        </div>
                        <div class="w-full mt-4">
                            <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="imgPreview" class="float-right w-2/5 h-48 rounded-2xl mt-5" />
                
                                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product description</label>
                            
                                        <textarea  id="desc-post" class="block w-1/2 h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                        </div>

                        <div class="flex justify-center mt-6">
                                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Products</button>
                        </div>

                        
                    </form>
            </section>       
        </main>
        </div>
        `;
    },
    afterRender() {
        const formAdd = $("#form-add");
        const imgPost = document.querySelector("#image-post");
        const imgPreview = document.querySelector("#imgPreview");

        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpt-polytechnic-sv/image/upload";
        const CLOUDINARY_PRESET_KEY = "vietkhiem";

        const imgLink = "";

        imgPost.addEventListener("change", (e) => {
            // console.log(URL.createObjectURL(e.target.files[0]))
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // submit form
        formAdd.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                "title-post": {
                    required: "Bắt buộc phải nhập trường này!",
                    minlength: "Nhập ít nhất 5 ký tự",
                },
            },
            submitHandler() {
                async function addPostHandle() {
                    const file = imgPost.files[0];
                    if (file) {
                        // lấy giá trị của file và gán vào object formData
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET_KEY);

                        // call API cloudinary để đẩy ảnh lên
                        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data;
                    }
                    // call api thêm bài viết
                    add({
                        title: document.querySelector("#title-post").value,
                        img: imgLink || "",
                        desc: document.querySelector("#desc-post").value,
                    });
                }
                addPostHandle();
            },
        });
    },
};
export default AdminAddProductssPage;