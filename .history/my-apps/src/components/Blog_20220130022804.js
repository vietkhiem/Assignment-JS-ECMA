import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Blog = {
    render() {
        return /* html */ `
        <div class="max-w-7xl mx-auto ">
        ${Nav.render()}
        
        <h1 role="heading" class="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">Read Our Latest</h1>
        <p role="contentinfo" class="text-base leading-normal text-center text-gray-600 mt-4">Whether article spirits new her covered hastily sitting her. Money witty books nor son</p>

        <div class="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
            <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                <div>
                    <img src="https://i.ibb.co/hKV7YhC/blog-1.png"  alt="woman smiling" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>

                <div class="lg:mt-10">
                    <img src="https://i.ibb.co/WkCydhJ/blog-4.png"  alt="coffe pouring" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>
            </div>
            <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                <div>
                    <img src="https://i.ibb.co/SmNSVs8/blog-2.png"  alt="plant held by a man" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>

                <div class="lg:mt-10">
                    <img src="https://i.ibb.co/3pMc5WS/blog-5.png"  alt="lady with plant" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>
            </div>
            <div class="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
                <div>
                    <img src="https://i.ibb.co/TLJdmSt/new-img-2.png"  alt="Delighful breakfast" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>

                <div class="xl:mt-10 mb-20">
                    <img src="https://i.ibb.co/c8dPSYB/blog-6.png"  alt="hats with image frame in middle" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                    <p class="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                </div>
            </div>
        </div>    
    
    </div>
    ${Footer.render()}
        `;
    },
};
export default Blog;