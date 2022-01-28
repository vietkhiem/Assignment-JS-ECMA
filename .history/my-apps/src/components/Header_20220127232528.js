const Header = {
    render() {
        return /* html */`
            
        <div class="dark:bg-gray-900">
        <div class="container mx-auto relative">
            <div class="py-4 mx-4 md:mx-6">
                <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
                    <div>
                        <div class="" role="img" aria-label="luxe. Logo.">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1.svg" alt="logo">
                            
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <ul class="flex items-center space-x-6">
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> New </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> Men </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> Women </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> Kids </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> Magazine </a>
                            </li>
                        </ul>
                    </div>
                    <div class="hidden md:flex items-center space-x-4">
                        <a aria-label="my account" href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2.svg" alt="account">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2dark.svg" alt="account">
                        </a>
                        <a aria-label="Favourites" href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3.svg" alt="Favourites">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3dark.svg" alt="Favourites">
                        </a>
                        <a aria-label="Bag" href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4.svg" alt="bag">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4dark.svg" alt="bag">
                        </a>
                    </div>

                    <div class="md:hidden">
                        <button aria-label="open menu" onclick="openMenu()" class="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg5.svg" alt="toggler">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg5dark.svg" alt="toggler">
                        </button>
                    </div>
                </div>
                <div class="mt-4 pb-4 flex space-x-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg6.svg" alt="Search">
                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg6dark.svg" alt="Search">
                    </div>
                    <input type="text" placeholder="Search for products" class="focus:outline-none bg-transparent text-sm text-gray-600" />
                </div>
            </div>

            <div id="mobile-menu" class="hidden dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex flex-col w-full h-screen bg-white pt-6">
                <div class="w-full">
                    <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
                        <div role="img" aria-label="Luxe. Logo">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1.svg" alt="logo">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1dark.svg" alt="logo">
                        </div>
                        <button aria-label="close menu" onclick="closeMenu()" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg7.svg" alt="logo">
                            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg7dark.svg" alt="logo">
                        </button>
                    </div>
                </div>
                <div class="mt-4 mx-4">
                    <ul class="flex flex-col space-y-4">
                        <li class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                            <a href="javascript:void(0)" class="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"> New </a>
                            <button aria-label="Add" class="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                            </button>
                        </li>
                        <li class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                            <a href="javascript:void(0)" class="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"> Men </a>
                            <button aria-label="Add" class="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                            </button>
                        </li>
                        <li class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                            <a href="javascript:void(0)" class="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"> Women </a>
                            <button aria-label="Add" class="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                            </button>
                        </li>
                        <li class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                            <a href="javascript:void(0)" class="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"> Kids </a>
                            <button aria-label="Add" class="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                            </button>
                        </li>
                        <li class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                            <a href="javascript:void(0)" class="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"> Magazine </a>
                            <button aria-label="Add" class="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                                <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg" alt="add">
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="w-full h-full flex items-end">
                    <ul class="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                        <li>
                            <a class="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2.svg" alt="account">
                                    <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2dark.svg" alt="account">
                                </div>
                                <p class="text-base">My account</p>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4.svg" alt="bag">
                                     <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4dark.svg" alt="bag">
                                </div>
                                <p class="text-base">Bag</p>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3.svg" alt="Favourites">
                                    <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3dark.svg" alt="Favourites">
                                </div>
                                <p class="text-base">Favourites</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  
  

        `;
    },
};
export default Header;