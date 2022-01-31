// import data from "../data";
// import axios from "axios";

const ProductsDetail = {
    render(id) {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts/${id}");
            .then(response => response.json())
            .then(data => `
                <div>
                    <h1>${data.title}</h1>
                </div>
            `)
    },
};
export default ProductsDetail;