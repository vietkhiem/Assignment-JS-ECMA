/* eslint-disable import/no-unresolved */
import Banner from "../components/banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-7xl mx-auto">
                <header>
                    ${Header.render()}
                    ${Nav.render()}
                </header>
                </div>
                <section>
                    ${Banner.render()}
                </section>
                <section class="news">
                    <h2 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        <div class="border border-gray-400 px-4 py-3">
                            <a href=""> <img src="https://picsum.photos/300/300" /> </a>
                            <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Tieu de bai viet</a></h3>
                            <p>MO ta bai viet</p>
                        </div>
                        <div class="border border-gray-400 px-4 py-3">
                            <a href=""> <img src="https://picsum.photos/300/300" /> </a>
                            <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Tieu de bai viet</a></h3>
                            <p>MO ta bai viet</p>
                        </div>
                        <div class="border border-gray-400 px-4 py-3">
                            <a href=""> <img src="https://picsum.photos/300/300" /> </a>
                            <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Tieu de bai viet</a></h3>
                            <p>MO ta bai viet</p>
                        </div>
                    </div>
                </section>
                
                <Footer>
                ${Footer.render()}
                </Footer>
            
        `;
    },
};
export default HomePage;