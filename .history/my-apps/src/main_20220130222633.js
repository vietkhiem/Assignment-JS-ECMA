import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Blog from "./components/Blog";
import Cart from "./pages/cart/Cart";
import Checkouts from "./components/Checkouts";
import ProductsDetailPage from "./components/ProductsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/product": () => print(Dashboard),
    "/blog": () => print(Blog),
    "/cart": () => print(Cart),
    "/productsDetail": () => print(ProductsDetailPage),
    "/checkouts": () => print(Checkouts),
    "/products/:id": ({ data }) => {
        print(ProductsDetailPage, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();