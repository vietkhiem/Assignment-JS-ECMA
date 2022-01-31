import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import Cart from "./pages/cart/Cart";
import ProductsDetail from "./components/ProductsDetail";
import Checkouts from "./components/Checkouts";
import Products from "./components/products";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(Products.render());
    },
    // "/contact": () => {
    //     print(.render());
    // },
    "/news/:id": (value) => {
        print(ProductsDetail.render(value.data.id));
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();