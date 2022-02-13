const Nav = {
    render() {
        return /* html */ `
        <div class= "max-w-7xl mx-auto pt-6 ">
        <div class=" bg-white">
        <nav class="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
            <!-- For large and Medium-sized Screen -->
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
                
  
                <!-- Burger Icon -->
                <div id="bgIcon" onclick="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                    <a href="/sign-in"><img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" /></a>
                    <a href="/sign-up"><img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" /></a>
                </div>
            </div>
  
            <!-- Mobile and small-screen devices (toggle Menu) -->
            
        </nav>    
    </div>
        </div>
        
        `;
    },
};
export default Nav;