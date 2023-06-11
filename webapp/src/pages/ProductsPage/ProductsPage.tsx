import React from "react";
import PageWrapper from '../PageWrapper';

const ProductsPage = () => {
 let content = 
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Product ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Product
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-32 p-4">
                      <img src="https://assets.shop.loblaws.ca/products/20313741003/b1/en/angle/20313741003_angle_a01_@2.png" alt="Coke" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                      1
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                      Coke
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
 

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        Product Page Goes Here
      </h1>
      {content}
    </PageWrapper>
  );
};

export default ProductsPage
