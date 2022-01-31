// import data from "../data";
// import axios from "axios";

const ProductsDetail = {
    render() {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts");
            .then(response => response.json())
            .then(data => `
                <div>
                    h1
                </div>
            `)
    },
};
export default ProductsDetail;