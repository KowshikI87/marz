import axios from "axios";
import { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper";
import ProductList from "../../components/ProductList/ProductList";
import Spinner from "../../components/Spinner/Spinner";

const PRODUCTS_URL = "/api/products/";

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {

  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [curntProductList, setProductList] = useState([]);

  useEffect(() => {
      const getProductData = async () => {
        try {
          const response = await axios.get(PRODUCTS_URL);
          const data = response.data;
          setLoadingState(DATA_STATES.loaded)
          setProductList(data);
        } catch(err) {
          setLoadingState(DATA_STATES.error);
        }
      }
      getProductData();
  }, [])

  let content;

  if (loadingState === DATA_STATES.waiting) {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  } else if (loadingState === DATA_STATES.loaded) {
    content = (
      <ProductList products={curntProductList}/>
    )
  } else {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );
  }

  return (
    <PageWrapper>
      { content }
    </PageWrapper>
  );
};

export default ProductsPage
