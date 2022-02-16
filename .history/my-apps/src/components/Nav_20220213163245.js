const Nav = {
    render() {
        return /* html */ `
        ${localStorage.getItem("user") ? `
        <ul class="flex">
          <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
          <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
      </ul>
      ` : ""}
        
        `;
    },
};
export default Nav;