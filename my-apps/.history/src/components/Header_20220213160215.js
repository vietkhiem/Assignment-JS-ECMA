const Header = {
    render() {
        return /* html */`
        <div class="flex justify-between "> 
        <div class="hidden sm:flex flex-row items-center space-x-6">
          <a href="/"><img src="./lib/images/logo/4.png"></a>                                                             
        </div>
        <div class=" flex space-x-3 items-center">
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
        </div>
        <div class="hidden sm:flex flex-row space-x-4">
            <a href="/sign-up"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button></a>
            <a href="/sign-in"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Sign In</button></a>
        </div>
        <!-- Burger Icon -->
        <div id="bgIcon" onclick="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
            <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />
        </div>
    </div>
<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">

<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ml-28">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
            </span>
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Bringing  
                <span class="text-5xl sm:text-7xl">
                Natural Beauty 
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
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative mr-20">
            <img src="./lib/images/banner/big-img/1.png" class="max-w-xl md:max-w-xl m-auto pt-20 mr-0 "/>
        </div>
    </div>
</div>
        <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-5xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">New Arrivals
            </h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>
</main>
${localStorage.getItem("user") ? `
              <ul class="flex">
                <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
                <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
            </ul>
            ` : ""} 
        `;
    },
};
export default Header;