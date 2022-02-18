import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import Cart from "./pages/cart/Cart";
import ProductsDetail from "./pages/products/ProductsDetail";
import ProductsPage from "./pages/products";
import Checkouts from "./pages/cart/Checkouts";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/product": () => print(Dashboard),
    "/blog": () => print(Blog),
    "/cart": () => print(Cart),
    "/Products": () => print(ProductsPage),
    "/Products/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/checkouts": () => print(Checkouts),
    "/sign-in": () => print(Signin),
    "/sign-up": () => print(Signup),
    "/news/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/admin/news/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(AdminEditPost, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();