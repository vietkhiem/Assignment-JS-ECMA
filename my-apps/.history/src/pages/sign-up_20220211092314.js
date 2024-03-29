import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { signup } from "../api/user";

const Signup = {
    render() {
        return /* html */`
        ${Nav.render()}
        <div class="flex items-center min-h-screen bg-gray-50">
            <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div class="flex flex-col md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                <img class="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                    alt="img" />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                    <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    </div>
                    <form id="formSignup">    
                        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                            <div class="flex items-center justify-center w-12 bg-emerald-500">
                                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
                                </svg>
                            </div>
                            
                            <div class="px-4 py-2 -mx-3">
                                <div class="mx-3">
                                    <span class="font-semibold text-emerald-500 dark:text-emerald-400 alert"></span>
                                    <p class="text-sm text-gray-600 dark:text-gray-200 "></p>
                                </div>
                            </div>
                        </div>
                                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                                Sign up
                                </h1>
                                <div>
                                <label class="block text-sm">
                                    Name
                                </label>
                                <input id="username"
                                    type="text"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Name" />
                                </div>
                                <div class="mt-4">
                                <label class="block text-sm">
                                    Email
                                </label>
                                <input id="email"
                                    type="email"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Email Address" />
                                </div>
                                <div>
                                <label class="block mt-4 text-sm">
                                    Password
                                </label>
                                <input id="password"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Password" type="password" />
                                </div>
                                <button
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                href="#">
                                Sign up
                                </button>
                
                                <div class="mt-4 text-center">
                                <p class="text-sm">Have an account already? <a href="sign-in"
                                    class="text-blue-600 hover:underline"> Sign in.</a></p>
                                </div>
                                </div>
                            </div>
                    </form>
            </div>
            </div>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                console.log(response);
                // alert("Đăng ký thành công");
            } catch (error) {
                document.querySelector(".alert").innerHTML = error.response.data;
                console.log(error);
            }
        });
    },
};
export default Signup;