/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";
import Nav from "../components/Nav";

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
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
};
export default HomePage;