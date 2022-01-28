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
                <a href="#" class="py-2 px-6 flex">
                    Home
                </a>
                <a href="#" class="py-2 px-6 flex">
                    Watch
                </a>
                <a href="#" class="py-2 px-6 flex">
                    Product
                </a>
                <a href="#" class="py-2 px-6 flex">
                    Contact
                </a>
                <a href="#" class="py-2 px-6 flex">
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
            <img src="./lib/images/banner/big-img/1.png" class="max-w-lg md:max-w-lg m-auto pt-5 mr-40 "/>
        </div>
    </div>
</div>
</main>






        <div class="dark:bg-gray-900">
        <div>
            <div class="relative">
                <!-- For md screen size -->
                <div id="md-searchbar" class="bg-white dark:bg-gray-900 hidden lg:hidden py-5 px-6 items-center justify-between">
                    <div class="flex items-center space-x-3 text-gray-800 dark:text-white">
                        <div>
                           <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search">
                           <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search">
                        </div>
                        <input type="text" placeholder="Search for products" class="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
                    </div>
                    <div class="space-x-6">
                        <button aria-label="view favourites" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites">
                            <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites">
                        </button>
                        <button aria-label="go to cart" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag">
                            <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag">
                        </button>
                    </div>
                </div>
                <!-- For md screen size -->

                <!-- For large screens -->
                <div class="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                    <div class="container mx-auto flex items-center justify-between">
                            <a href="index.html"><img src="./lib/images/logo/4.png" alt="logo ./lib/images"></a>
                            <div class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                    <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">HOME</a>

                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">PRODUCT</a>

                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">BLOG</a>

                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">CONTACT</a>

                    
                </div>

                        <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
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
                </div>
                <!-- For small screen -->
                <div id="mobile-menu" class="hidden absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full">
                    <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                        <div class="flex items-center space-x-3">
                            <div>
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search">  
                            </div>
                            <input type="text" placeholder="Search for products" class="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                        </div>

                        <button onclick="closeMenu()" aria-label="close menu" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6.svg" alt="cross">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6dark.svg" alt="cross">  
                        </button>
                    </div>
                    <div class="mt-6 p-4">
                        <ul class="flex flex-col space-y-6">
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Home
                                    <div>
                                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow">
                                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow">  
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Furniture
                                    <div>
                                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow">
                                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow">  
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Lookbook
                                    <div>
                                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow">
                                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow">  
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Support
                                    <div>
                                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow">
                                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow">  
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="h-full flex items-end">
                        <ul class="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    <div>
                                        <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag">
                                        <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag">
                                    </div>
                                    <p class="text-base">Cart</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    <div>
                                        <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites">
                                        <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites">
                                    </div>
                                    <p class="text-base">Wishlist</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <div role="main" class="flex flex-col items-center justify-center pt-20 mb-20">
                <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Trang Chủ</h1>
                <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
            </div>
    </div>


    
    

        `;
    },
};
export default Header;