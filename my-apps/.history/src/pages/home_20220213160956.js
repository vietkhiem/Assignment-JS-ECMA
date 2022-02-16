/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";
// import ProductsRate from "../components/ProductsRate";
import Slide from "../components/Slide";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";

const HomePage = {
    async render() {
        return /* html */`
                <header class="slide">
                    ${Slide.render()}
                </header>
                <header>
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
                <section class="partners">
                    ${Partners.render()}
                </section>
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
};

export default HomePage;