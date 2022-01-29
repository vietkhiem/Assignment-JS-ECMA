const Products = {
    render() {
        return /* html */ `

<div class="bg-gray-100">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
    <h2 class="text-2xl font-extrabold text-gray-900">Collections</h2>

    <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      <div class="group relative">
        <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Desk and Office
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
      </div>

      <div class="group relative">
        <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Self-Improvement
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
      </div>

      <div class="group relative">
        <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Travel
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
      </div>
    </div>
  </div>
</div>

      
    <div class="relative flex justify-center items-center md:justify-start ">
    <img class="hidden lg:block  w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_desktop.png" alt="randeer">
    <img class="md:block lg:hidden hidden  w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_ipad.png" alt="randeer">
    <img class="md:hidden w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_mobile.png" alt="randeer">
<div class="flex absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
    <div class=" py-32 sm:py-20  md:hidden"></div>
    <div class="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
        <p class="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3" >Your message from Santa is waiting!</p>
        <p class="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200" >Looking to create a greater impact with your commercial Christmas display? Take a look at the services we have on offer...</p>
        <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
            Explore Now
        </button>   
    </div>        
</div>
</div>

</div>
        `;
    },
};
export default Products;