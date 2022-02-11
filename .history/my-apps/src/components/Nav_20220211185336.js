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
                        Page
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
                <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8 mr-20">
                            <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
                                <a href="/sign-in">
                                    <button onclick="toggleSearch()" aria-label="search items" class="w-7 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>
                                </a>

                                    <button aria-label="view favourites" class="w-7 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    </button>
                                <a href="/cart">
                                    <button aria-label="go to cart" class="w-7 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </button>
                                </a>

                                <div class="p-10">

                                    <div class="dropdown inline-block relative">
                                        <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                        <span class="mr-1"></span>
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                                        </button>
                                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                                        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                                        </ul>
                                    </div>

                                </div>
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