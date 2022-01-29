const Header = {
    render() {
        return /* html */`
            
<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
<header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
        <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
            <a href="index.html"><img src="./lib/images/logo/4.png" alt="logo ./lib/images"></a>
        </div>
        <div class="flex items-center">
            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                    Home
                </a>
                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                    Product
                </a>
                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                    Blog
                </a>
                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                    Contact
                </a>
                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                    Carrer
                </a>
            </nav>
            <button class="lg:hidden flex flex-col ml-4">
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
            </button>
        </div>
    </div>
</header>
<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
            </span>
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span class="text-5xl sm:text-7xl">
                    Time
                </span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div class="flex mt-8">
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Get started
                </a>
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src="./lib/images/banner/big-img/1.png" class="max-w-xl md:max-w-xl m-auto pt-20 mr-0 "/>
        </div>
    </div>
</div>
</main>
        <div role="main" class="flex flex-col items-center justify-center mb-10 ">
            <h1 class="text-5xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Trang Chủ</h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>
        `;
    },
};
export default Header;