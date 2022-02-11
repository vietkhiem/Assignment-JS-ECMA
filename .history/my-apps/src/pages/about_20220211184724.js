import Header from "../components/Header";
import Nav from "../components/Nav";

const AboutPage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <header>
                    ${Header.render()}
                    ${Nav.render()}
                </header>
                <section class="news">
                    <h1 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Giới thiệu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio obcaecati ex quae assumenda eligendi explicabo ipsum quaerat fuga cumque perferendis, consequatur pariatur, atque dolor distinctio! Mollitia exercitationem nihil quam dolore?</p>
                </section>
            </div>
        `;
    },
};
export default AboutPage;