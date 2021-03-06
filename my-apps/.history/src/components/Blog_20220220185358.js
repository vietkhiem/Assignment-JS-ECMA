import { getAll } from "../api/blog";
import Footer from "./Footer";
import Nav from "./Nav";

const Blog = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        ${Nav.render()}
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
            <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
           
                <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                ${data.map((blog) => /* html */`
                    <img src="${blog.image}" class="object-cover w-full h-64" alt="" />
                    <div class="p-5 border border-t-0">
                        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a href="/" class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title="traveling">traveling</a>
                        <span class="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <a href="/" aria-label="Category" title="Visit the East" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">Visit the East</a>
                        <p class="mb-2 text-gray-700">
                        Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                
                </div>
                
            </div>
            `).join("")}
        </div>
        
    ${Footer.render()}
        `;
    },
};
export default Blog;