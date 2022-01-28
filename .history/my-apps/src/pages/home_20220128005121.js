/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-7xl mx-auto">
                <header>
                    ${Header.render()}
                </header>

                <section class="news">
                    ${Products.render()}
                </section>
            </div>

                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
};
export default HomePage;