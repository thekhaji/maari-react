import axios from "axios";
import { serverApi } from "../../libs/config";
import { Product, ProductInquiry } from "../../libs/types/product";

class ProductService {
    private readonly path: string;

    constructor(){
        this.path = serverApi;
    }
    
    public async getProucts(input: ProductInquiry): Promise<Product[]>{
        try {
            console.log(this.path, serverApi);
            
            let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
            if(input.productCollection)
                url += `&productCollection=${input.productCollection}`
            if(input.search)
                url += `&search=${input.search}`

            const result = await axios.get(url);
            console.log("getProducts:", result);
            
            return result.data;
        } catch (err) {
            console.log("Error, getProducts:", err);
            throw err;
        }
    }

}

export default ProductService;