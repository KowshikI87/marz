import { ProductProps, ProductListProps } from '../interfaces';

const ProductRow = (props: ProductProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-32 p-4">
          <img src={props.ProductPhotoURL} alt={props.ProductName} />
      </td>
      <td className="w-48 px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {props.ProductID}
      </td>
      <td className="w-48 px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {props.ProductName}
      </td>
    </tr>
  )
}
const ProductList = (props: ProductListProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-large text-center text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3"> 
                        Product ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product Name
                    </th>
                </tr>
            </thead>
            <tbody className="text-large">
              {props.products.map(product => {
                return (
                  <ProductRow 
                    key={product.ProductID} 
                    ProductID={product.ProductID}
                    ProductName={product.ProductName} 
                    ProductPhotoURL={product.ProductPhotoURL} />
                )
              })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList;