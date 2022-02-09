const Nav = {
    render() {
        return /* html */ `
        <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl ml-32">
                <a href="/"><img src="./lib/images/logo/4.png"></a>
            </div>
            <div class="flex items-center ml-16">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="/  " class="py-2 px-6 flex hover:text-indigo-500">
                        Home
                    </a>
                    <a href="/" class="py-2 px-6 flex hover:text-indigo-500">
                        Product
                    </a>
                    <a href="/blog" class="py-2 px-6 flex hover:text-indigo-500">
                        Blog
                    </a>
                    <a href="" class="py-2 px-6 flex hover:text-indigo-500">
                        Contact
                    </a>
                    <a href="" class="py-2 px-6 flex hover:text-indigo-500">
                        Cart
                    </a>
                </nav>
                <button class="lg:hidden flex flex-col ml-8">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
                <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8 mr-12">
                            <div class="hidden lg:flex items-center">
                                <button onclick="toggleSearch()" aria-label="search items" class="w-5 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <img class="transform rotate-90 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search">
                                    <img class="transform rotate-90 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search">
                                </button>
                                <input id="searchInput" type="text" placeholder="search" class="hidden text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1" />
                            </div>
                            <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
                                <button aria-label="view favourites" class="w-6 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites">
                                    <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites">
                                </button>
                                <button aria-label="go to cart" class="w-6 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag">
                                    <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag">
                                </button>
                            </div>

                            <div class="flex lg:hidden">
                                <button aria-label="show options" onclick="mdOptionsToggle()" class="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg" alt="toggler">
                                    <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg" alt="toggler">
                                </button>

                                <button aria-label="open menu" onclick="openMenu()" class="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg" alt="toggler">
                                    <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg" alt="toggler">
                                </button>
                            </div>
                        </div>
        </div>
    </header>
        `;
    },
};
export default Nav;