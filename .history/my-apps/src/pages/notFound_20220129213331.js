import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const NotFoundPage = {
    render() {
        return /* html */ `
        ${Nav.render()}
        ${Header.render()}
        <div class="flex items-center justify-center py-12">
            <div class="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3">
                <div class="flex flex-col items-center py-16">
                    <img class="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" />
                    <img class="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
                    <h1 class="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p class="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
                    <button class="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
                </div>
            </div>
        </div>
        ${Footer.render()}
        `;
    },
};
export default NotFoundPage;