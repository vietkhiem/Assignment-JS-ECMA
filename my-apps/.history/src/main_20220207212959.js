import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import Cart from "./pages/cart/Cart";
import ProductsDetail from "./components/ProductsDetail";
import Checkouts from "./pages/cart/Checkouts";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import Signin from "./pages/sign-in";

const router = new Navigo("/", { linksSelector: "a" });

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
    "/ProductsDetail": () => print(ProductsDetail),
    "/checkouts": () => print(Checkouts),
    "/signin": () => print(Sign-in),
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