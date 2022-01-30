/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";
import ProductsRate from "../components/ProductsRate";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

const HomePage = {
    render() {
        return /* html */`
                <header>
                    ${Nav.render()}
                    ${Header.render()}
                </header>
                <section class="news">
                    ${Products.render()}
                </section>
                <section class="news">
                    ${Banner.render()}
                </section>
                <section class="news">
                    ${ProductsRate.render()}
                </section>
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
};
export default HomePage;