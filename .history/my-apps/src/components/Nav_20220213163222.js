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
                ${localStorage.getItem("user") ? `
                <ul class="flex">
                  <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
                  <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
              </ul>
              ` : ""}
  
            <!-- Mobile and small-screen devices (toggle Menu) -->
            
        </nav>    
    </div>
        </div>
        
        `;
    },
};
export default Nav;