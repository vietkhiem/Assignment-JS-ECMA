import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNewsPage from "./pages/admin/news";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import CartPage from "./pages/cart/Cart";
import ProductsDetail from "./pages/products/ProductsDetail";
import ProductsPage from "./pages/products";
import Checkouts from "./pages/cart/Checkouts";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";
import Contact from "./components/contact";
import ProductsCate from "./pages/products/productsCate";
import User from "./pages/admin/user";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin/user": () => print(User),
    "/admin/products": () => print(AdminNewsPage),
    "/admin/dashboards": () => print(Dashboard),
    "/blog": () => print(Blog),
    "/contact": () => print(Contact),
    "/cart": () => print(CartPage),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/productsCate": () => print(ProductsCate),
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