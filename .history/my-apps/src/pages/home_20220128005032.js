/* eslint-disable import/no-unresolved */
import Banner from "../components/banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products";
import Nav from "../components/Nav";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-7xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                
                <section>
                    
                </section>
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