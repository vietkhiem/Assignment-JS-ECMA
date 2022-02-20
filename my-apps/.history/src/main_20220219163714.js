import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNewsPage from "./pages/admin/products";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import CartPage from "./pages/cart/Cart";
import ProductsDetail from "./pages/products/ProductsDetail";
import ProductsPage from "./pages/products";
import Checkouts from "./pages/cart/Checkouts";
import AdminAddNewsPage from "./pages/admin/products/add";
import AdminEditPost from "./pages/admin/products/edit";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";
import Contact from "./components/contact";
import ProductsCate from "./pages/products/productsCate";
import AdminUser from "./pages/admin/users";
import AdminContact from "./pages/admin/contact";
import AdminBlog from "./pages/admin/blog";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin/user": () => print(AdminUser),
    "/admin/contact": () => print(AdminContact),
    "/admin/blog": () => print(AdminBlog),
    "/admin/products": () => print(AdminNewsPage),
    "/blog": () => print(Blog),
    "/contact": () => print(Contact),
    "/cart": () => print(CartPage),
    "/Products": () => print(ProductsPage),
    "/Products/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/productscate": () => print(ProductsCate),
    "/checkouts": () => print(Checkouts),
    "/sign-in": () => print(Signin),
    "/sign-up": () => print(Signup),
    "/products-detail/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/admin/products/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(AdminEditPost, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();