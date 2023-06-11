import { ProductListProps } from '../interfaces';

const ProductList = (props: ProductListProps) => {
  return (
    <div>
      {props.products.map(product => {
        return (
          <div key={product.ProductID}>
          <p>Product Name: {product.ProductName}</p>
          <p>Product ID: {product.ProductID}</p>
          <img src={product.ProductPhotoURL} alt={product.ProductName}/>
        </div>
        )
      })}
    </div>
  )
}

export default ProductList;