const Nav = {
    render() {
        return /* html */ `
            <nav>
                <ul class="menu">
                    <li class="menu-item"><a href="/" class="menu-item__link">Trang chủ</a></li>
                    <li class="menu-item"><a href="/about" class="menu-item__link">Giới thiệu</a></li>
                    <li class="menu-item"><a href="/news" class="menu-item__link">Tin tức</a></li>
                    <li class="menu-item"><a href="/product" class="menu-item__link">Sản phẩm</a></li>
                    <li class="menu-item"><a href="/contact" class="menu-item__link">Liên hệ</a></li>
                </ul>
            </nav>
        `;
    },
};
export default Nav;