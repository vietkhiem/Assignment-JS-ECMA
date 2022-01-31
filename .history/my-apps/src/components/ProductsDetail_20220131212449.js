// import data from "../data";
import axios from "axios";

const ProductsDetail = {
    async render(id) {
        const { data } = await get(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);
        console.log(data);
        return `
            <div>
                <h1>${data.title}</h1>
            </div>
        `;
    },
};
export default ProductsDetail;