import Navigo from "navigo";
import AboutPage from "./pages/about";

import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";

import ProductsDetail from "./components/ProductsDetail";

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