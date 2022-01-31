// import data from "../data";

const ProductsDetail = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return `
            <div>
                <h1>${data.title}</h1>
            </div>
        `;
    },
};
export default ProductsDetail;