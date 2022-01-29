import Footer from "./Footer";
import Header from "./Header";

const Blog = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="lg:flex justify-center">
        <div class="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png" alt="fingerprint recognition" class="lg:w-full w-auto" />
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <p class="text-base leading-4 text-gray-500">5 feb</p>
                        <p class="text-base leading-none text-gray-500 ml-12">5 min read</p>
                    </div>
                    <div class="flex items-center">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-4-svg1.svg" alt="line" />
                        <p class="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                    </div>
                </div>
                <h1 class="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">Chip fingerprint technology for secure transaction</h1>
                <p class="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in, rather urgently, a need for low-cost security technology. While passwords and other such forms of encription are software base, there is also a need for security level</p>
            </div>
        </div>
        <div class="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            <div class="lg:w-auto sm:w-1/2">
                <img src="https://i.ibb.co/d6jQJyY/blog-2-desktop.png" alt="flying letters" class="w-full" />
                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <p class="text-base leading-4 text-gray-500">5 feb</p>
                            <p class="text-base leading-none text-gray-500 ml-12">5 min read</p>
                        </div>
                        <div class="flex items-center">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-4-svg1.svg" alt="line" />
                            <p class="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                        </div>
                    </div>
                    <h1 class="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                    <p class="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                </div>
            </div>
            <div class="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
                <img src="https://i.ibb.co/9cN11LT/blog-3-desktop.png" alt="robotic arm" class="w-full" />
                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <p class="text-base leading-4 text-gray-500">5 feb</p>
                            <p class="text-base leading-none text-gray-500 ml-12">5 min read</p>
                        </div>
                        <div class="flex items-center">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-4-svg1.svg" alt="line" />
                            <p class="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                        </div>
                    </div>
                    <h1 class="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                    <p class="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                </div>
            </div>
        </div>
    </div>
    ${Footer.render()}
        `;
    },
};
export default Blog;