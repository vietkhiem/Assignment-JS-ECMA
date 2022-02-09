/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";
import ProductsRate from "../components/ProductsRate";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";

const HomePage = {
    async render() {
        return /* html */`
                <header>
                    ${Nav.render()}
                    ${Header.render()}
                </header>
                <section class="news">
                ${await Products.render()}
                </section>
                <section class="banner">
                    ${Banner.render()}
                </section>
                
                <section class="review">
                    ${Reviews.render()}
                </section>
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
};
export default HomePage;