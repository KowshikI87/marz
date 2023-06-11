import axios from "axios";
import { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper";
import ProductList from "../../components/ProductList/ProductList";

const PRODUCTS_URL = "/api/products/";
const ProductsPage = () => {
    const [curntProductList, setProductList] = useState({});

    useEffect(() => {
        const getProductData = async () => {
            const response = await axios.get(PRODUCTS_URL);
            const data = response.data;
            console.log(`the data is`, {data});
            setProductList(data);
        }
        getProductData();
    }, [])

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        Product Page Goes Here
      </h1>
      <ProductList products={[]}/>
    </PageWrapper>
  );
};

export default ProductsPage
